"use client";
import React from 'react';
import Image from 'next/image';
import clearDay from '../../../public/sunny.svg';
import clearNight from '../../../public/moon.svg';
import cloudyDay from '../../../public/sunnyCloudy.svg';
import cloudyNight from '../../../public/cloudy.svg';
import rain from '../../../public/rain.svg';
import thunderStorm from '../../../public/thunderStorm.svg';
import snow from '../../../public/snow.svg';

type WeatherIcon = 
    "01d" | "01n" | "02d" | "02n" | 
    "03d" | "03n" | "04d" | "04n" | 
    "09d" | "09n" | "10d" | "10n" | 
    "11d" | "11n" | "13d" | "13n";

type weatherProps = {
    city: string;
    chanceOfRain: number;
    temperature: number;
    icon: WeatherIcon;
}

const allIcons: Record<WeatherIcon, any> = {
    "01d": clearDay,
    "01n": clearNight,
    "02d": cloudyDay,
    "02n": cloudyNight,
    "03d": cloudyDay,
    "03n": cloudyNight,
    "04d": cloudyDay,
    "04n": cloudyNight,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": thunderStorm,
    "11n": thunderStorm, 
    "13d": snow,
    "13n": snow,
  };

export default function Weather({ city, chanceOfRain, temperature, icon }: weatherProps) {
    const weatherIcon = allIcons[icon] || clearDay;
    return (
        <div className="weatherContainer">
            <div className="leftWeatherInfo">
                <div className="heading">{city}</div>
                <div className="subheading"> Chance of rain: {chanceOfRain}% </div>
                <div className="temperature"> {temperature}°</div>
            </div>
            <div className="rightWeatherInfo">
                <Image src={weatherIcon} alt="Weather" className="weatherSymbol" />
            </div>
        </div>
    );
}
