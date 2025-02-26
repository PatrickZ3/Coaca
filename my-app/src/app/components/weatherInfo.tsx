"use client";
import React from 'react'

type weatherProps = {
    realFeel: number;
    chanceOfRain: number;
    wind: number;
    uvIndex: number;
}

export default function WeatherInfo({ realFeel, chanceOfRain, wind, uvIndex }: weatherProps) {
    return (
        <div className="container">
            <div className="leftContainer">
                <div className="innerContainer">
                    <div className="left">
                        <img src='/temp.svg' alt="Weather" className="infoSymbol" />
                    </div>
                    <div className="right">
                        <div className="info">Real Feel</div>
                        <div className="content"> {realFeel}°</div>
                    </div>
                </div>
                <div className="innerContainer">
                    <div className="left">
                        <img src='/droplet.svg' alt="Weather" className="infoSymbol" />
                    </div>
                    <div className="right">
                        <div className="info">Chance of rain</div>
                        <div className="content"> {chanceOfRain}%</div>
                    </div>
                </div>
            </div>
            <div className="rightContainer">
                <div className="innerContainer">
                    <div className="left">
                        <img src='/wind.svg' alt="Weather" className="infoSymbol" />
                    </div>
                    <div className="right">
                        <div className="info">Wind</div>
                        <div className="content"> {wind} km/h</div>
                    </div>
                </div>
                <div className="innerContainer">
                    <div className="left">
                        <img src='/sun.svg' alt="Weather" className="infoSymbol" />
                    </div>
                    <div className="right">
                        <div className="info">UV Index</div>
                        <div className="content"> {uvIndex}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
