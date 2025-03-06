'use client'

import { useState } from "react"
import TopAppBar from "@/app/components/ui/TopAppBar"




const AddCategoryPage = () => {
    const [categoryName, setCategoryName] = useState("")
    const [categoryDescription, setCategoryDescription] = useState("")
    const [categoryImage, setCategoryImage] = useState<File | null>(null)
    const [isUploading, setIsUploading] = useState(false)


    const handleFormSubmit = () => {
        setIsUploading(true)


        const category = {
            name: categoryName,
            description: categoryDescription,
            image: categoryImage,
        }
        console.log(category)
    }

    return (
        <div className="w-full h-screen flex items-center flex-row  justify-center">

            <div className="absolute top-0 w-full">

                <TopAppBar title="Add Category" onBackPress={() => {
                    window.history.back()
                }} />
            </div>



            <div className="w-full h-fit md:w-1/2 xl:w-1/3 flex justify-center flex-col items-center  p-6 rounded-2xl mt-2 gap-4 place-content-center shadow-2xl">
                <h1 className="text-2xl">Add Category</h1>
                <div className="w-full  flex flex-col">
                    <label className="text-gray-700 text-xs">Category Name</label>
                    <input
                        type="text"
                        value={categoryName}
                        onChange={(event) => setCategoryName(event.target.value)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />


                </div>
                <div className="w-full  flex flex-col">
                    <label className="text-gray-700 text-xs">Category Description</label>
                    <textarea
                        value={categoryDescription}
                        onChange={(event) => setCategoryDescription(event.target.value)}
                        className="w-full h-20 border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />


                </div>
                <div className="w-full  flex flex-col">
                    <label className="text-gray-700 text-xs">Category Icon</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => setCategoryImage(event.target.files ? event.target.files[0] : null)}
                        className="w-full border border-gray-300 focus:outline-none focus:border-blue-600 rounded-md p-2 space-y-2 ps-4 text-xs"
                    />


                </div>


                <div className="w-full flex justify-center">
                    <button
                        onClick={handleFormSubmit}
                        className={`w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                        {isUploading ? "Uploading..." : "Add"}
                    </button>

                </div>
            </div>

        </div>

    )
}


export default AddCategoryPage