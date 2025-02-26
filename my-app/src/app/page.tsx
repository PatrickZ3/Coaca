"use client";
import React, { useState } from 'react';
import Weather from './components/weather'
import SearchBar from './components/search-bar';
import WeatherInfo from'./components/weatherInfo';

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log("Parent received:", value);
  };

  const [city, setCity] = useState('Toronto');
  const [chanceOfRain, setChanceOfRain] = useState(0);
  const [temperature, setTemperature] = useState(31);
  const [realFeel, setrealFeel] = useState(30);
  const [wind, setwind] = useState(0.2);
  const [uvIndex, setuvIndex] = useState(3);
  
  return (
    <div className="flex flex-col w-3/4 mx-auto">
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} chanceOfRain={chanceOfRain} temperature={temperature}/>
      <WeatherInfo chanceOfRain={chanceOfRain} realFeel={realFeel} wind={wind} uvIndex={uvIndex}/>
    </div>
  );
}
