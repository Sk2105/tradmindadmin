"use client"
import Image from 'next/image';
import { TAB, tabList } from '@/lib/Tabs';
import TabItem from '@/app/components/ui/TabItem';


export default function NavigationBar({ selectedTab, setSelectedTab }: { selectedTab: TAB; setSelectedTab: (tab: TAB) => void }) {
    return (
        <div className="h-[100vh] w-[20vw] fixed flex flex-col bg-blue-600 overflow-hidden">
            <div className="w-full flex items-center p-2">
                <Image src="/logo1.jpg" alt="logo" width={30} height={30} />
                <h1 className="text-2xl ps-2 font-bold text-white">Tradminds</h1>
            </div>
            <div className="h-full w-full p-2 justify-items-start ">
                {tabList.map(({ label, value, icon }) => (
                    <TabItem
                        key={value}
                        title={label}
                        onClick={() => setSelectedTab(value)}
                        selectedTab={selectedTab}
                        tab={value}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
    );
}

