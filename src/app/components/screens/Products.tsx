import { useState } from "react";
import FeaturedProducts from "../ui/ProductCard";
import SearchBar from "../ui/SearchBar";

export default function Products() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }
    return (
        <div className="h-full w-full flex flex-col p-4">
            <div className="flex justify-between items-center p-2 h-fit  w-full">
                <h1 className="text-2xl w-fit h-fit">Products</h1>
                <SearchBar onSearch={handleSearch} title="Enter Product Title..." />
                <button className="bg-blue-500 w-fit h-fit text-xs rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4">
                    Add 
                </button>
            </div>
          <FeaturedProducts searchTerm={searchTerm}  />
        </div>
    );
}
