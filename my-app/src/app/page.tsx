"use client";
import React, { useState } from 'react';
import Weather from './components/weather'
import SearchBar from './components/search-bar';

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log("Parent received:", value);
  };

  const [city, setCity] = useState('Toronto');
  const [chanceOfRain, setChanceOfRain] = useState(0);
  const [temperature, setTemperature] = useState(31);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} chanceOfRain={chanceOfRain} temperature={temperature}/>
    </div>
  );
}
