"use client"
import useOrderStore from '@/lib/store/order';
import React from 'react';
import OrderCard from '@/app/components/ui/OrderCard';
import SearchBar from '../ui/SearchBar';


const state = [
    "All Orders",
    "Pending",
    "Delivered",
    "Cancelled"
]

const Orders: React.FC = () => {

    const orders = useOrderStore((state) => state.orders);
    const [terms, setTerms] = React.useState<string>('All Orders');
    const [searchTerm, setSearchTerm] = React.useState<number>();

    const handleSearch = (searchTerm: number) => {
        setSearchTerm(searchTerm);
    }



    return (
        <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center w-full p-2'>

                <h1 className='text-2xl font-semibold my-4'>Orders</h1>

                <SearchBar onSearch={(search) => {
                    if (isNaN(parseInt(search))) {
                        handleSearch(0)
                        return
                    }
                    handleSearch(parseInt(search))
                }} title='Enter Order Id...' />
            </div>
            <div className='flex justify-between items-center w-fit'>
                {
                    state.map((item, index) => (
                        <h2 key={index} onClick={
                            () => setTerms(item)
                        } className={`text-xs py-1 px-2 cursor-pointer m-2 rounded-2xl font-semibold ${terms === item ? 'text-blue-600 bg-blue-600/10 hover:bg-blue-600/20' : 'text-gray-600 bg-gray-600/10 hover:bg-gray-600/20'}`}>{item}</h2>
                    ))
                }
            </div>
            <div className='flex flex-col space-y-4 justify-center'>
                {orders.map((order) => {
                    if(searchTerm && searchTerm > 0  && order.orderId !== searchTerm) return null

                    if (terms === 'All Orders') {
                        return (
                            <OrderCard key={order.orderId} order={order} />
                        )
                    }
                    if (order.status != terms) return null

                    return (
                        <OrderCard key={order.orderId} order={order} />
                    )

                })}
            </div>
        </div>

    );
};

export default Orders;