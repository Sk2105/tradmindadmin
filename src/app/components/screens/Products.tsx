"use client"

import { useState } from "react";
import SearchBar from "../ui/SearchBar";
import useProductStore from "@/lib/store/product";
import { LuPlus } from "react-icons/lu";
import ProductCard from "../ui/ProductCard";
import Link from "next/link";

export default function Products() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const products = useProductStore((state) => state.products);
    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }
    return (
        <div className="h-full w-full flex flex-col p-2">
            <div className="grid grid-cols-1 items-center md:grid-cols-2 p-2 h-fit  w-full">
                <h1 className="text-2xl w-fit h-fit">Products</h1>
                <SearchBar onSearch={handleSearch} title="Enter Product Title..." />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6">

                    <Link href={"/add-product"}>
                        <div className='w-full h-full grid place-content-center text-8xl border-2 border-blue-600 hover:bg-blue-600/20 bg-blue-600/10 rounded-xl text-blue-600'>
                            <LuPlus />
                        </div>
                    </Link>
                    {products.length > 0 ? (
                        products.map((product) => {
                            if (!product.title.toLowerCase().includes(searchTerm.toLowerCase())) return null;
                            else return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    ) : (
                        <div className="text-center col-span-full">No products found</div>
                    )}
                </div>
            </div>
        </div>
    );
}
