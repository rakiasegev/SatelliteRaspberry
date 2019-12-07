import React from "react"; 
import $ from "jquery"; 
import Map from 'ol/Map';
import View from 'ol/View';
import {get} from 'ol/proj';
import WMTS from 'ol/source/WMTS';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import TileLayer from 'ol/layer/Tile';

var server = "https://eonet.sci.gsfc.nasa.gov/api/v2.1";

class Satellite extends React.Component{
    constructor(props){ 
        // doing this so that showMaps is recognised as a function in showLayers, it seems like it now passes in null something 
        super(props); 
        this.showMap = this.showMap(this, this); 
    }
    componentDidMount(){
            $( document ).ready(function() {
                $.getJSON( "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events", {
                    status: "open",
                    limit: 20
                })
                .done(function( data ) {
                    $.each( data.events, function( key, event ) {
                        $( "#eventList" ).append(
                            "<dt>" + event.id + ": " + event.title + "</dt>"
                        );
                        if (event.description.length) {
                            $( "#eventList" ).append(
                                "<dd><em>" + event.description + "</em></dd>"
                            );
                        }
                    });
                });
            });
        } // closing for ComponentDidMount()

        // Show the available layers for the event category
        showLayers(eventId) {
        // hide the events list
        $( "#eventSelect" ).hide();
        $( "#layerSelect" ).show();

        // fetch the single event feed
        $.getJSON( server + "/events/" + eventId )
            .done(function( event ) {
                // Get the date and first location of the event.
                // Events can have multiple locations but we are simplifying here.
                var location = event.geometries[0];

                $( "#eventTitle" ).append(": "+event.title+", "+location.date.substring(0,10));

                // Show list of categories and children layers
                $.each( event.categories, function( key, category ) {
                    $( "#layerList" ).append(
                        "<dt>"+category.title+"</dt> "
                    );

                    // Get the applicable layers for the specific event category.
                    // Only include WMTS_1_0_0 layers for now, will add WMS example later.
                    $.getJSON( server + "/layers/" + category.id )
                        .done(function( data ) {
                            var layers = data['categories'][0]['layers'];
                            $.each( layers, function( key, layer ) {
                                if (layer.serviceTypeId == "WMTS_1_0_0") {
                                    $( "#layerList" ).append(
                                        // "<dd>" +
                                        <a href='#' onClick= {this.showMap(encodeURIComponent(JSON.stringify(layer)) + ","+encodeURIComponent(JSON.stringify(location))) }> Click here</a>
                                    );
                                }
                            });
                        });
                    });
                });
            }
            
            getCenter(geojson) {
                if (geojson.type == "Point") {
                    return geojson.coordinates;
                } else if (geojson.type == "Polygon") {
                    /*
                    For this test we are going to compute the center point of the bounding box
                     that encloses the geoJson Polygon.
        
                     Since the Polygon specification consists of an outer ring and then inner holes,
                     we will only compute the center of the first (outer) LinearRing in the Polygon.
        
                     Convert these coordinates to 0-360 to make it easier
                     */
        
                    // use the first point of the first LinearRing as the default for calculations
                    var ullat = geojson.coordinates[0][0][1] + 90;
                    var ullon = geojson.coordinates[0][0][0] + 180;
                    var lrlat = geojson.coordinates[0][0][1] + 90;
                    var lrlon = geojson.coordinates[0][0][0] + 180;
        
                    for (var i = 0; i < geojson.coordinates[0].length; i++) {
        
                        // longitudes
                        if (geojson.coordinates[0][i][0] + 180 > ullon) {
                            ullon = geojson.coordinates[0][i][0] + 180;
                        }
                        if (geojson.coordinates[0][i][0] + 180 < lrlon) {
                            lrlon = geojson.coordinates[0][i][0] + 180;
                        }
        
                        // latitudes
                        if (geojson.coordinates[0][i][1] + 90 > ullat) {
                            ullat = geojson.coordinates[0][i][1] + 90;
                        }
                        if (geojson.coordinates[0][i][1] + 90 < lrlat) {
                            lrlat = geojson.coordinates[0][i][1] + 90;
                        }
                    }
        
                    var centerX = (ullon + ((lrlon - ullon) / 2)) - 180;
                    var centerY = (lrlat + ((ullat - lrlat) / 2)) - 90;
        
                    return [centerX, centerY];
                }
            }
            showMap(encodedLayer, encodedLocation) {
                var layer = JSON.parse(decodeURIComponent(encodedLayer));
                var location = JSON.parse(decodeURIComponent(encodedLocation));
        
                var center = this.getCenter(location);
        
                // quick and dirty way to extract day string from full ISO datetime
                var mapTime = new Date(location.date).toJSON().substring(0,10);
        
                this.displayMap(layer.serviceUrl, layer.name,
                    center, mapTime,
                    layer.parameters[0].FORMAT, layer.parameters[0].TILEMATRIXSET);
            }
            
            displayMap(serviceUrl, layerName, center, dateStr, format, matrixSet) {
                // call empty() to make sure another map doesn't already exist there
                $( "#map" ).empty();
                                    
                var map = new Map({
                    view: new View({
                        maxResolution: 0.5625,
                        projection: get("EPSG:4326"),
                        extent: [-180, -90, 180, 90],
                        center: center,
                        zoom: 3,
                        maxZoom: 8
                    }),
                    target: "map",
                    renderer: ["canvas", "dom"]
                });
        
                /*
                 This determination of resolutions is based solely on the capabilities
                 of the NASA GIBS WMTS as it is currently the only WMTS server represented
                 in EONET. More information about GIBS: https://go.nasa.gov/1GTDj3V
                 */
                var source = new WMTS({
                    url: serviceUrl + "?time=" + dateStr,
                    layer: layerName,
                    format: format,
                    matrixSet: matrixSet,
                    tileGrid: new WMTSTileGrid ({
                        origin: [-180, 90],
                        resolutions: [
                            0.5625,
                            0.28125,
                            0.140625,
                            0.0703125,
                            0.03515625,
                            0.017578125,
                            0.0087890625,
                            0.00439453125,
                            0.002197265625
                        ],
                        matrixIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                        tileSize: 512
                    })
                });
        
                var layer = new TileLayer({
                    source: source
                });
        
                map.addLayer(layer);
            }
 
    render() {
        return (
            // this.componentDidMount()
            <div id="layerList">
                {this.showLayers("EONET_4521")};
            </div> 

        )
    }
}

export default Satellite;
