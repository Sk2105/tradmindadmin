import useProductStore from "@/lib/store/product";
import useUsersStore from "@/lib/store/user";
import Image from "next/image";
import { useEffect, useState } from "react";


const OrderCard = ({ order }: {
    order: {
        orderId: number;
        date: string;
        status: string;
        totalAmount: number;
        quantity: number;
        customerAddress: string;
        customerId: number;
        productId: number;
    };
}) => {

    type Product = {
        id: number;
        title: string;
        description: string;
        price: number;
        category: string;
        stock: number;
        image: string;
    };

    type user = {
        id: number;
        email: string;
        name: string;
        role: string;
    }

    const [product, setProduct] = useState<Product | undefined>()
    const [user, setUser] = useState<user | undefined>()




    const getProductById = useProductStore((state) => state.getProductById);

    useEffect(() => {
        getProductById(order.productId)
            .then((p) => {
                if (p) {
                    setProduct(p);
                }
            })
            .catch((error) => console.log(error))
    }, [order.productId, getProductById])

    useEffect(() => {
        useUsersStore.getState().getUserById(order.customerId)
            .then((u) => {
                if (u) {
                    setUser(u);
                }
            })
            .catch((error) => console.log(error));

    }, [order.customerId])
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md mb-4">
            <div className="flex items-center">
                <Image src={product?.image || ""} alt="Logo" width={100} height={100} />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">Order ID: {order.orderId}</h3>
                    <p className="text-sm text-gray-600">Date: {order.date}</p>
                </div>
            </div>
            <p className={`text-sm p-1 rounded-xl pl-2 pr-2 text-gray-600 ${order.status === "Pending" ? "text-yellow-500 bg-amber-200/20" : order.status === "Cancelled" ? "text-red-500 bg-red-200/20" : "text-green-500 bg-green-200/20"}`}>{order.status}</p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ">View</button>
        </div>
    );
};

export default OrderCard;