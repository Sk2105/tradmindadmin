"use client";
import { useCategoryStore } from "@/lib/store/category";
import CategoryCard from "../ui/CategoryCard";
import SearchBar from "../ui/SearchBar";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import Link from "next/link";

export default function Categories() {

  const categories = useCategoryStore((state) => state.categories);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  }
  return (
    <div className="h-full w-full flex flex-col p-2 ">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 p-1 h-fit  w-full">
        <h1 className="text-2xl ">Categories</h1>
        <SearchBar onSearch={handleSearch} title="Enter Category Name..." />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-4 mt-4">

        <Link href={'/add-category'}>
          <div className="w-full h-full cursor-pointer border-2  place-content-center grid text-blue-600 text-8xl border-blue-600 rounded-xl bg-blue-600/10 hover:bg-blue-600/20">
            <LuPlus />
          </div>
        </Link>
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
