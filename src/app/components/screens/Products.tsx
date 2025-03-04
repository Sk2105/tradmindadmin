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
            <div className="grid grid-cols-1 items-center md:grid-cols-2 p-2 h-fit  w-full">
                <h1 className="text-2xl w-fit h-fit">Products</h1>
                <SearchBar onSearch={handleSearch} title="Enter Product Title..." />
            </div>
          <FeaturedProducts searchTerm={searchTerm}  />
        </div>
    );
}
