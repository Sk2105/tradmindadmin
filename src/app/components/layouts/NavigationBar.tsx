"use client"
import Image from 'next/image';
import { TAB, tabList } from '@/lib/models/Tabs';
import TabItem from '@/app/components/ui/TabItem';
import { LuMenu } from 'react-icons/lu';
import { useState } from 'react';


export default function NavigationBar({ selectedTab, setSelectedTab }: { selectedTab: TAB; setSelectedTab: (tab: TAB) => void }) {

    const [state, setState] = useState(false);
    return (
        <div className="h-fit w-fit md:h-full md:w-[20vw]  md:fixed flex flex-col bg-white overflow-hidden">
            <div className="w-fit flex items-center p-2">
                <button onClick={
                    () => {
                        setState(!state)
                    }
                }>
                    <LuMenu size={30} className='m-2 md:hidden hover:bg-gray-600/10 p-1 rounded-full' />
                </button>
                <Image src="/logo1.jpg" alt="logo" width={30} height={30} />
                <h1 className="text-2xl ps-2 font-bold text-blue">Tradminds</h1>
            </div>
            <div className={`h-fit w-fit md:w-full md:h-full bg-white flex-col md:flex  md:visible p-2 justify-items-start ${state ? 'duration-300 visible w-full' : 'hidden w-0'}`}>
                {tabList.map(({ label, value, icon }) => (
                    <TabItem
                        key={value}
                        title={label}
                        onClick={() => {
                            setSelectedTab(value);
                            setState(false);
                        }}
                        selectedTab={selectedTab}
                        tab={value}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
    );
}

