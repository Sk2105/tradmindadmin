"use client";
import { useCategoryStore } from "@/lib/store/category";
import CategoryCard from "../ui/CategoryCard";

export default function Categories() {

  const categories = useCategoryStore((state) => state.categories);
  return (
    <div className="h-full w-full flex flex-col p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl ">Categories</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Create New
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {Object.values(categories).map((category) => (
          <CategoryCard key={category.id} category={category} onClick={() => {

          }} />
        ))}
      </div>
    </div>
  );
}
