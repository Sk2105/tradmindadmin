"use client"

import TopAppBar from "@/app/components/ui/TopAppBar"
import useOrderStore from "@/lib/store/order";
import useProductStore from "@/lib/store/product";
import useUsersStore from "@/lib/store/user";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Order = {
    orderId: number;
    date: string;
    status: string;
    totalAmount: number;
    quantity: number;
    customerAddress: string;
    customerId: number;
    productId: number;
    deliveredDate?: string
}

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string;
}

type User = {
    id: number;
    email: string;
    name: string;
    role: string;
}

export default function OrderPage() {

    const { id } = useParams();

    const [order, setOrder] = useState<Order | null>(null);

    const [product, setProduct] = useState<Product | null>(null);

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (id) {
            useOrderStore.getState().getOrderById(Number(id)).then((order) => {
                if (order) {
                    setOrder(order);
                }
            }).catch((error) => console.log(error))


        }
    }, [id])

    useEffect(() => {
        useProductStore.getState().getProductById(order?.productId || 0).then((product) => {
            if (product) {
                setProduct(product);
            }
        }).catch((error) => console.log(error))

        useUsersStore.getState().getUserById(order?.customerId || 0).then((user) => {
            if (user) {
                setUser(user);
            }
        }).catch((error) => console.log(error))
    }, [order])
    return (
        <div className="flex w-full h-screen flex-col">
            <TopAppBar title="Order Details" onBackPress={() => {
                window.history.back();
            }} />


            <h1 className="text-2xl ms-2 font-bold md:ms-4 mt-4">{product?.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2">

                <div className="p-4">
                    <h1>Order Details</h1>
                    <div className="flex flex-row items-center md:flex-row">
                        <Image
                            src={product?.image || ""}
                            alt="order image"
                            width={150}
                            height={1500}
                            className="object-contain  p-4"
                        />


                        <div className="w-full flex flex-col ">
                            <h1 className="text-[16px]">Order Id: {order?.orderId}</h1>
                            <h1 className="text-[16px]">Date: {order?.date}</h1>
                            <h1 className="text-[16px]">Total Amount: {order?.totalAmount}</h1>
                            <h1 className="text-[16px]">Quantity: {order?.quantity}</h1>
                        </div>

                    </div>


                </div>

                <div className="p-4">
                    <h1 className="text-sm text-gray-600">User Details</h1>
                    <h1 className="text-[16px]">{user?.name}</h1>
                    <h1 className="text-sm text-gray-600">Email: {user?.email}</h1>
                    <h1 className="text-sm text-gray-600">Address</h1>
                    <h1 className="text-[16px]">{order?.customerAddress}</h1>
                </div>



            </div>


            <div className="ms-2 md:ms-4 ">

                <div className="flex items-center space-y-2 ">
                    <h1>Status : <span className={`py-1 px-4  rounded-3xl text sm ${order?.status === "Delivered" ? "text-green-600 bg-green-600/10" : order?.status === "Pending" ? "text-yellow-600 bg-yellow-600/10" : order?.status === "On The Way" ? "text-blue-600 bg-blue-600/10" : "text-red-600 bg-red-600/10"}`}>{order?.status}</span></h1>
                    {
                        order?.status === 'Delivered' && <button className="px-4 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs">
                            Download Invoice
                        </button>
                    }
                </div>
                {
                    order?.deliveredDate && <h1 className="text-sm text-gray-600">Delivered Date : {order?.deliveredDate}</h1>
                }

                {
                    order?.status === 'Pending' && <div className="flex pt-2 ">
                        <button className="px-4 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs">
                            Accept Order
                        </button>
                        <button className="px-4 py-1 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs ms-4">
                            Reject Order
                        </button>
                    </div>
                }
            </div>





            <div className="flex flex-col ms-2 md:ms-4 mt-4 ">
                <h1 className="mb-2">Sipping Details</h1>

                <div className="text-sm text-gray-600 flex flex-row">
                    <p className="">Date : {order?.date}</p>
                    <p className="ms-4">Ordered</p>

                </div>

                {/* order accepted */}

                <div className="text-sm text-gray-600 flex flex-row">
                    <p className="">Date : {order?.date}</p>
                    <p className="ms-4">Order Accepted</p>

                </div>

                {/* on the way */}

                <div className="text-sm text-gray-600 flex flex-row">
                    <p className="">Date : {order?.date}</p>
                    <p className="ms-4">On The Way</p>

                </div>

                {/* delivered */}

                <div className="text-sm text-gray-600 flex flex-row">
                    <p className="">Date : {order?.date}</p>
                    <p className="ms-4">Delivered</p>

                </div>

            </div>


        </div>
    )
}