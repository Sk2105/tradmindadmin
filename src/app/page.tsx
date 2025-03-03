'use client'
import { useState } from "react";
import NavigationBar from "./components/layouts/NavigationBar";
import Categories from "./components/screens/Categories";
import { TAB } from "@/lib/models/Tabs";
import Dashboard from "./components/screens/Dashboard";
import Products from "./components/screens/Products";
import Orders from "./components/screens/Orders";
import Users from "./components/screens/Users";

const screens = [
  { label: TAB.Dashboard, component: <Dashboard key={TAB.Dashboard} /> },
  { label: TAB.Category, component: <Categories key={TAB.Category} /> },
  {
    label: TAB.Product,
    component: <Products key={TAB.Product} />
  }
  , {
    label: TAB.Orders, component: <Orders key={TAB.Orders} />
  }
  ,
  {
    label: TAB.Users, component: <Users key={TAB.Users} />
  }
]


export default function Home() {
  const [selectedTab, setSelectedTab] = useState<TAB>(TAB.Dashboard);


  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-[20vw] h-[100vh] top-0">

        <NavigationBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <div className="w-[80vw]">

        {
          screens.filter((screen) => screen.label === selectedTab).map((screen) => screen.component)
        }
      </div>

    </div>
  );
}
