"use client";
import React from 'react';

type weatherProps = {
    city: string;
    chanceOfRain: number;
    temperature: number;
}

export default function Weather({ city, chanceOfRain, temperature }: weatherProps) {
    return (
        <div className="weatherContainer">
            <div className="leftWeatherInfo">
                <div className="heading">{city}</div>
                <div className="subheading"> Chance of rain: {chanceOfRain}% </div>
                <div className="temperature"> {temperature}°</div>
            </div>
            <div className="rightWeatherInfo">
                
                <img src='/sunny.svg' alt="Weather" className="weatherSymbol" />
            </div>
        </div>
    );
}
