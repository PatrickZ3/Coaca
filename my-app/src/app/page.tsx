"use client";
import React, { useState, useEffect } from 'react';
import Weather from './components/weather'
import SearchBar from './components/search-bar';
import WeatherInfo from './components/weatherInfo';


export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log("Parent received:", value);
  };

  const [city, setCity] = useState('Toronto');
  const [chanceOfRain, setChanceOfRain] = useState<number | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [realFeel, setrealFeel] = useState<number | null>(null);
  const [wind, setwind] = useState<number | null>(null);
  const [skyCondition, setskyCondition] = useState('');
  const [icon, setIcon] = useState('');

  const allIcons = {
    "01d": 'Clear Sky',
    "01n": 'Clear Sky',
    "02d": 'Few Clouds',
    "02n": 'Few Clouds',
    "03d": 'Scattered Clouds',
    "03n": 'Scattered Clouds',
    "04d": 'Broken Clouds',
    "04n": 'Broken Clouds',
    "09d": 'Shower Rain',
    "09n": 'Shower Rain',
    "10d": 'Rain',
    "10n": 'Rain',
    "11d": 'Thunder Storm',
    "11n": 'Thunder Storm', 
    "13d": 'Snowy',
    "13n": 'Snowy',
  };

  const search = async (city: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_APP_ID}`;

      const response = await fetch(url);
      const data = await response.json();
      const lat = data.coord.lat;
      const lon = data.coord.lon;

      const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_APP_ID}`;
      const response2 = await fetch(url2);
      const data2 = await response2.json();

      const nextForecast = data2.list[0];
      const rain = nextForecast.pop ? Math.round(nextForecast.pop * 100) : 0;

      setTemperature(Math.round(data.main.temp));
      setCity(data.name);
      setrealFeel(Math.round(data.main.feels_like));
      setwind(data.wind.speed);
      setChanceOfRain(rain);
      setskyCondition(allIcons[data.weather[0].icon]);
      setIcon(data.weather[0].icon);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    search(city);
  }, []);

  return (
    <div className="flex flex-col w-1/2 mx-auto">
      <div>
        <SearchBar onSearch={handleSearch} />
        <Weather city={city} chanceOfRain={chanceOfRain} temperature={temperature} icon={icon} />
        <WeatherInfo chanceOfRain={chanceOfRain} realFeel={realFeel} wind={wind} skyCondition={skyCondition} />
      </div>

    </div>
  );
}
