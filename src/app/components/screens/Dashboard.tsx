"use client"
import React from 'react';
import CustomButton from '@/app/components/ui/CustomButton';
import { AiOutlineStock } from 'react-icons/ai';
import Image from 'next/image';

export default function Dashboard() {

    return (
        <div className="h-full w-full flex flex-col p-4">

            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <CustomButton label="Create New" onClick={() => alert('Button clicked!')} />
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-content-center gap-4 mt-4 mb-4'>

                <VisitorCard />
                <LastWeekVisitor />
                <TodayOrder />
                <LastWeekOrder />

            </div>

            <RecentOrder />

            <RecentEnquiries />





        </div>
    );
}

function VisitorCard() {


    return (
        <div className="p-4 bg-blue-600/10 w-full rounded-md ">

            <h1 className='text-black font-bold'>Today Visitor</h1>
            <div className='flex items-baseline justify-between'>

                <h2 className='text-blue-600 text-3xl'>2.5k</h2>
                <span className='text-green-700 flex flex-row'>
                    <AiOutlineStock />
                    <h3 className='text-green-700 ps-1 text-xs'>30%</h3>
                </span>

            </div>
        </div>
    );
}

function LastWeekVisitor() {

    return (
        <div className="p-4 bg-violet-600/10 w-full rounded-md ">

            <h1 className='text-black font-bold'>Last 7 days</h1>
            <div className='flex items-baseline justify-between'>

                <h2 className='text-blue-600 text-3xl'>15.3k</h2>
                <span className='text-green-700 flex flex-row'>
                    <AiOutlineStock />
                    <h3 className='text-green-700 ps-1 text-xs'>10%</h3>
                </span>

            </div>
        </div>
    )

}



function TodayOrder() {

    return (
        <div className="p-4 bg-sky-600/10 w-full rounded-md ">

            <h1 className='text-black font-bold'>Today Order</h1>
            <div className='flex items-baseline justify-between'>

                <h2 className='text-blue-600 text-3xl'>2.5k</h2>
                <span className='text-green-700 flex flex-row'>
                    <AiOutlineStock />
                    <h3 className='text-green-700 ps-1 text-xs'>30%</h3>
                </span>

            </div>
        </div>
    );

}

function LastWeekOrder() {

    return (
        <div className="p-4 bg-yellow-600/10 w-full rounded-md ">

            <h1 className='text-black font-bold'>Last 7 days</h1>
            <div className='flex items-baseline justify-between'>

                <h2 className='text-blue-600 text-3xl'>15.3k</h2>
                <span className='text-green-700 flex flex-row'>
                    <AiOutlineStock />
                    <h3 className='text-green-700 ps-1 text-xs'>10%</h3>
                </span>
            </div>
        </div>
    );

}



function RecentOrder() {
    return (
        <div className="p-4 bg-green-600/10 w-full place-content-center flex flex-col justify-center items-center
         rounded-xl">
            <h1 className='w-full '>Recent Orders</h1>

            {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="h-fit w-full rounded-lg items-center flex flex-col md:flex-row justify-between transition-all">
                    <div className='w-full flex flex-row gap-4  items-center justify-start h-[80px]'>

                        <Image
                            src={"/needle-grinding-machine-250x250.jpg"}
                            alt=""
                            width={60}
                            height={60}
                            className="object-contain w-[60px] h-[60px] p-4"
                        />

                        <h3 className=" font-semibold text-[16px]">{"Needle Grinding Machine"}</h3>
                    </div>
                    <div className='w-full flex flex-row justify-end gap-2   items-center'>

                        <h1 className='w-fit text-black text-xs'>Qty:1</h1> 
                        <button className='text-center w-fit h-fit bg-blue-600 text-[12px] font-bold hover:bg-blue-700 p-2 rounded-md text-white' >
                            Processed Order
                        </button>
                    </div>
                </div>
            ))}

            <button className='text-xs m-2 w-fit p-2 h-fit rounded-2xl hover:bg-blue-600/20'>View all</button>


        </div >
    );
}


function RecentEnquiries() {
    return (
        <div className="p-4 mt-4 bg-blue-600/10 w-full place-content-center flex flex-col justify-center items-center
         rounded-xl">
            <h1 className='w-full '>Recent Enquiries</h1>

            {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="h-fit w-full rounded-lg items-center flex justify-between flex-col md:flex-row transition-all">
                    <div className='w-full flex flex-row gap-4 items-center h-[80px]'>

                        <Image
                            src={"/needle-grinding-machine-250x250.jpg"}
                            alt=""
                            width={60}
                            height={60}
                            className="object-contain w-[60px] h-[60px] p-4"
                        />

                        <h3 className=" font-semibold text-[16px]">{"Needle Grinding Machine"}</h3>
                    </div>
                    <div className='w-full flex flex-row justify-end gap-2  items-center'>
                        <h1 className='w-fit text-black text-xs'>today</h1>

                        <button className='text-center w-fit h-fit bg-blue-600 text-[12px] font-bold hover:bg-blue-700 p-2 rounded-md text-white' >
                            Give the Quotation
                        </button>
                    </div>
                </div>
            ))}

            <button className='text-xs m-2 w-fit p-2 h-fit rounded-2xl hover:bg-blue-600/20'>View all</button>
        </div>
    );
}


