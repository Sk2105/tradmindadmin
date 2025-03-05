'use client'
import TopAppBar from "@/app/components/ui/TopAppBar"
import { useCategoryStore } from "@/lib/store/category"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { LuPen } from "react-icons/lu"
import useProductStore from "@/lib/store/product"
import ProductCard from "@/app/components/ui/ProductCard"


type Category = {
    id: number
    name: string
    description?: string
    image?: string
}

type Product = {
    id: number
    title: string
    description: string
    price: number
    category: string
    stock: number
    image: string
}

const CategoryPage = () => {

    const { id } = useParams()

    const [category, setCategory] = useState<Category | null>(null)
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        if (id) {
            useCategoryStore.getState().getCategoryById(Number(id)).then((category) => {
                setCategory(category)
            }).catch((error) => console.log(error))
        }

    }, [id])

    useEffect(() => {
        if (category) {
            useProductStore.getState().getProductsByCategoryId(category.name || "").then((products) => {
                setProducts(products)
            }).catch((error) => console.log(error))
        }
    }, [category])




    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <TopAppBar title={category?.name || "Category"} onBackPress={() => {
                window.history.back();
            }} />

            <h1 className="w-full text-2xl font-semibold mt-2 ms-2 ps-2 ">Category Details</h1>
            <div className="flex flex-row place-content-center">

                <div className="w-fit h-fit p-4 flex items-center flex-col p-2">

                    <Image src={category?.image || ""} alt={category?.name || ""} className="object-cover" width={200} height={200} />

                    <button className="bg-blue-600 flex justify-center items-center text-white px-4 py-2 rounded-2xl text-xs">
                        <LuPen />
                        <span className="ps-2">Change Image</span>
                    </button>


                    <div className="w-fit h-full p-4 flex items-center justify-center p-2">

                        <h1 className="w-fit text-2xl font-semibold m-2 ps-2 ">{category?.name || ""}</h1>
                        <button className="text-black p-2 hover:bg-blue-600/10 rounded-2xl text-xs">
                            <LuPen />
                        </button>
                    </div>
                </div>

                <div className="w-full h-fit p-4 flex flex-col p-2">

                    <div className="w-fit h-fit py-2 flex flex-row">
                        <p>Description</p>
                        <button className="text-black p-2 hover:bg-blue-600/10 rounded-2xl text-xs">
                            <LuPen />
                        </button>
                    </div>

                    <p className="w-full text-gray-600 text-sm">{category?.description || ""}</p>
                </div>


            </div>
            <div className="w-full h-fit flex flex-col p-2">
                <h1 className="w-fit text-2xl font-semibold m-2 ps-2 ">Products ({products.length})</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        products && products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}


export default CategoryPage