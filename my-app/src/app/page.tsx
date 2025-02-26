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

      let skyCondition = "Unknown";
      data2.list.forEach((item: { dt: number; weather: { main: string; description: string }[] }) => {
        const time = new Date(item.dt * 1000).getHours();
        if (time >= 12 && time <= 15) { // Peak daylight hours
          const condition = item.weather[0].main;
          if (condition === 'Clear') {
            skyCondition = "Clear Sky";
          } else if (condition === 'Clouds') {
            const description = item.weather[0].description;
            if (description.includes('few clouds')) {
              skyCondition = "Few Clouds";
            } else {
              skyCondition = "Cloudy";
            }
          } else if (condition === 'Rain' || condition === 'Drizzle') {
            skyCondition = "Rainy";
          } else if (condition === 'Snow') {
            skyCondition = "Snowy";
          } else {
            skyCondition = "Cloudy";
          }
        }
      });



      console.log(data);
      console.log(data2);

      const nextForecast = data2.list[0];
      const rain = nextForecast.pop ? Math.round(nextForecast.pop * 100) : 0;

      setTemperature(Math.round(data.main.temp));
      setCity(data.name);
      setrealFeel(Math.round(data.main.feels_like));
      setwind(data.wind.speed);
      setChanceOfRain(rain);
      setskyCondition(skyCondition);
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
