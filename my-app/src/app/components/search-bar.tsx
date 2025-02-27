"use client";
import React, { useState, ChangeEvent } from "react";


export type SearchProps = {
    onSearch: (value: string) => void
}

export default function SearchBar({ onSearch }: SearchProps) {
    // const { onSearch } = props;
    const [value, setValue] = useState('');

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setValue(target.value)

    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
                onSearch(value);
            console.log("Enter:", value)
        }
    };

    const handleClick = () => {
        const inputElement = document.querySelector<HTMLInputElement>('input[name="search"]');
        if (inputElement) {
            inputElement.focus();
        }
    };

    return (
        <div className="flex mt-8 p-0 z-50">
            <div 
            className="relative w-full text-gray-600 p-0"
            onClick={handleClick}
            >
                <input
                    type="search"
                    name="search"
                    value={value}
                    placeholder="Enter City Name..."
                    className="bg-[#6055a1] h-10 px-5 pr-10 w-full rounded-lg text-sm text-[#f5ecff] focus:outline-none cursor-text"
                    onChange={searchHandler}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}
