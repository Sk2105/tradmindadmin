'use client'
import { useState } from "react";
import NavigationBar from "./components/layouts/NavigationBar";
import Categories from "./components/screens/Categories";
import { TAB, tabList } from "@/lib/models/Tabs";
import Dashboard from "./components/screens/Dashboard";
import Products from "./components/screens/Products";
import Orders from "./components/screens/Orders";
import Users from "./components/screens/Users";
import FeedbackPage from "./components/screens/Feeback";
import { useSearchParams, useRouter } from "next/navigation";

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
  ,
  {
    label: TAB.Feedbacks, component: <FeedbackPage key={TAB.Feedbacks} />
  }
]


export default function Home() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab')
  const curr = (tab && tabList.filter(t => t.label === tab)[0].value) || TAB.Dashboard

  const [selectedTab, setSelectedTab] = useState(curr);


  const handleChange = (tab: TAB) => {
    const labal = tabList.filter(t => t.value === tab)[0].label
    setSelectedTab(tab);
    router.push(`?tab=${labal}`);
  }




  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="w-fit md:w-[20vw] h-fit md:h-full top-0">

        <NavigationBar selectedTab={selectedTab} setSelectedTab={handleChange} />
      </div>
      <div className="w-full md:w-[80vw]">

        {
          screens.filter((screen) => screen.label === selectedTab).map((screen) => screen.component)
        }
      </div>

    </div>
  );
}
