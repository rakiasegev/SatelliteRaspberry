import React from 'react';

const AstronomyCard = (props) => {
    const {title, url, hdurl, explanation, data, copyright} = props.data;
    return (
        <div className="astronomy-card">
            <h6 className="astronomy-title">{title}</h6>
            <center>
            <a href={hdurl} className="astronomy-image-wrapper">
                <img src={url} alt={title} />
            </a>
            </center>
            <br></br>

            <p>{explanation}</p>
            <span>{data} {copyright}</span>
        </div>
    )
}

export default AstronomyCard;