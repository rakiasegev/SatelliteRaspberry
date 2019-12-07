import React from "react"; 
import $ from "jquery"; 

class Satellite extends React.Component{
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
            })
        }
    
    render() {
        return (
            // this.componentDidMount()
            <div id="eventList"></div> 
        )
    }
}

export default Satellite;
