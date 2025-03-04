import React, { useState } from 'react';
interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
    title?: string ;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch,title="Search" }: SearchBarProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className="search-bar flex items-center w-full p-1 md:px-2 md:py-1">
        <input
            type="text"
            placeholder={title}
            value={searchTerm}
            onChange={handleSearch}
            className='rounded-xl p-2 pl-4 pr-4 w-full text-[16px] bg-gray-400/20 focus:outline-none focus:ring-1 focus:ring-blue-600'
        />
        </div>
    );
    }

    export default SearchBar