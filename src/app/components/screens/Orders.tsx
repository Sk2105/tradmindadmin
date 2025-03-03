"use client"
import useOrderStore from '@/lib/store/order';
import React from 'react';
import OrderCard from '@/app/components/ui/OrderCard';

const Orders: React.FC = () => {

    const orders = useOrderStore((state) => state.orders);

    return (
       <div className='container mx-auto px-4'>
           <h1 className='text-2xl font-semibold my-4'>Orders</h1>
           <div className='flex flex-col space-y-4 justify-center'>
               {orders.map((order) => (
                     <OrderCard key={order.orderId} order={order} />
                ))}
           </div>
         </div>
           
    );
};

export default Orders;