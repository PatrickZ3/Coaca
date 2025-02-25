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

  return (
    <div  >
      <SearchBar onSearch={handleSearch} />
      <Weather/>
    </div>
  );
}
