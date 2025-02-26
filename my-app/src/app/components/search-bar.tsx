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
        console.log(value)

    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
                onSearch(value);
            console.log("Enter:", value)
        }
    };

    return (
        <div className="flex mt-8 p-0">
            <div className="relative w-full text-gray-600 p-0">
                <input
                    type={'search'}
                    name={'search'}
                    value={value}
                    placeholder="Search..."
                    className="bg-[#6055a1] h-10 px-5 pr-10 w-full rounded-lg text-sm text-[#f5ecff] focus:outline-none"
                    onChange={searchHandler}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}
