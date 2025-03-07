'use client'
import TopAppBar from "@/app/components/ui/TopAppBar";
import useProductStore from "@/lib/store/product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string;
    brand?: string;
    discountPrice?: number;
}


const EditProduct = () => {

    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        if (id) {
            useProductStore.getState().getProductById(Number(id))
                .then((p) => {
                    if (p) {
                        setProduct(p);
                    }
                })
                .catch((error) => console.log(error))
        }
    }, [id]);

    const handleFormSubmit = () => {
        if (product) {
           console.log(product);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center w-full h-full">

            <div className="fixed top-0 w-full h-full">
                <TopAppBar title="Edit Product" onBackPress={() => { }} />
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 flex flex-col top-5 justify-center gap-4 items-center shadow-2xl p-4 bg-white rounded-2xl mt-20">
                <h1 className="font-bold text-2xl mt-4">Edit Product</h1>

        
                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Name</label>
                            <input
                                type="text"
                                value={product?.title}
                                onChange={(e) => setProduct({ ...product!, title: e.target.value, description: product?.description || "", price: product?.price || 0, category: product?.category || "", stock: product?.stock || 0, image: product?.image || "" })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Category</label>
                            <input
                                type="text"
                                value={product?.category}
                                onChange={(e) => setProduct({ ...product!, category: e.target.value, title: product?.title || "", description: product?.description || "", price: product?.price || 0, stock: product?.stock || 0, image: product?.image || "" })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Price</label>
                            <input
                                type="number"
                                value={product?.price}
                                onChange={(e) => setProduct({ ...product!, price: Number(e.target.value), title: product?.title || "", description: product?.description || "", category: product?.category || "", stock: product?.stock || 0, image: product?.image || "" })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Discount Price</label>
                            <input
                                type="number"
                                value={product?.discountPrice}
                                onChange={(e) => setProduct({ ...product!, discountPrice: Number(e.target.value) })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Quantity</label>
                            <input
                                type="number"
                                value={product?.stock}
                                onChange={(e) => setProduct({ ...product!, stock: Number(e.target.value) })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Description</label>
                            <input
                                type="text"
                                value={product?.description}
                                onChange={(e) => setProduct({ ...product!, description: e.target.value })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Brand</label>
                            <input
                                type="text"
                                value={product?.brand}
                                onChange={(e) => setProduct({ ...product!, brand: e.target.value })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <label className="text-gray-700 text-xs">Product Image</label>
                            <input
                                type="text"
                                value={product?.image}
                                onChange={(e) => setProduct({ ...product!, image: e.target.value })}
                                className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                            />
                        </div>

                        <button
                            onClick={() => handleFormSubmit()}
                            className="w-full bg-blue-600 text-white py-2 rounded-md mt-4"
                        >
                            Save
                        </button>
                
             

            </div>

        </div>
    )
}

export default EditProduct