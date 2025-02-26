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
        <div className="flex mt-8">
            <div className="relative w-full text-gray-600">
                <input
                    type={'search'}
                    name={'search'}
                    value={value}
                    placeholder="Search..."
                    className="bg-[#6055a1] h-10 px-5 pr-10 w-full rounded-lg text-sm text-[#f5ecff] focus:outline-none"
                    onChange={searchHandler}
                    onKeyDown={handleKeyDown}
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 text-[#f5ecff]">
                    <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
