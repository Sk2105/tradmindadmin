"use client"
import TopAppBar from "@/app/components/ui/TopAppBar"
import { useCategoryStore } from "@/lib/store/category"
import { useState } from "react"

const AddProduct = () => {

    const [productName, setProductName] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const [productDiscountPrice, setProductDiscountPrice] = useState(0)
    const [productImage, setProductImage] = useState<File | null>(null)
    const [productQuantity, setProductQuantity] = useState(0)
    const [productDescription, setProductDescription] = useState("")
    const [brand, setBrand] = useState("")

    const { categories } = useCategoryStore((state) => state)
    const [isUploading, setIsUploading] = useState(false)


    const handleFormSubmit = () => {
        setIsUploading(true)
        const product = {
            name: productName,
            category: productCategory,
            price: productPrice,
            image: productImage,
            quantity: productQuantity,
            description: productDescription,
            brand: brand,
            discountPrice: productDiscountPrice
        }
        console.log(product)
    }




    return (
        <div className="w-full h-full flex items-center justify-center flex-col">

            <TopAppBar title="Add Product" onBackPress={
                () => window.history.back()
            } />


            <div className="w-full md:w-1/2 m-2 xl:w-1/3 gap-4 h-full flex flex-col justify-center items-center rounded-2xl p-6 shadow-2xl place-content-center">
                <h1 className="text-2xl font-bold text-gray-700">Add Product</h1>
                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Name</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Category</label>
                    <select
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category.name} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Brand</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Price</label>
                    <input
                        type="number"
                        min={0}
                        value={productPrice}
                        onChange={(e) => setProductPrice(Number(e.target.value))}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Discount Price</label>
                    <input
                        type="number"
                        min={0}
                        value={productDiscountPrice}
                        onChange={(e) => setProductDiscountPrice(Number(e.target.value))}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProductImage(e.target.files?.[0] || null)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Quantity</label>
                    <input
                        type="number"
                        min={1}
                        value={productQuantity}
                        onChange={(e) => setProductQuantity(Number(e.target.value))}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <div className="w-full flex flex-col">
                    <label className="text-gray-700 text-xs">Product Description</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />
                </div>

                <button
                    onClick={handleFormSubmit}
                    className={`w-full bg-blue-600 text-white py-2 rounded-md mt-4 ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    {isUploading ? "Uploading..." : "Add Product"}
                </button>   


            </div>
        </div>
    )

}

export default AddProduct