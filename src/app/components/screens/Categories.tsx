"use client";
import { useCategoryStore } from "@/lib/store/category";
import CategoryCard from "../ui/CategoryCard";
import SearchBar from "../ui/SearchBar";
import { useState } from "react";

export default function Categories() {

  const categories = useCategoryStore((state) => state.categories);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  }
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-2xl ">Categories</h1>
        <SearchBar onSearch={handleSearch}  title="Enter Category Name..."/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl text-xs">
          Add
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {Object.values(categories).map((category) => {
          if (!category.name.toLowerCase().includes(searchTerm.toLowerCase())) return null;
          else return (
            <CategoryCard key={category.id} category={category} onClick={() => {

            }} />
          )
        })}
      </div>
    </div>
  );
}
