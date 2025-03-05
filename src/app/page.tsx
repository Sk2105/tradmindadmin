'use client'
import { useState } from "react";
import NavigationBar from "./components/layouts/NavigationBar";
import Categories from "./components/screens/Categories";
import { TAB, tabList } from "@/lib/models/Tabs";
import Dashboard from "./components/screens/Dashboard";
import Products from "./components/screens/Products";
import Orders from "./components/screens/Orders";
import Users from "./components/screens/Users";
import FeedbackPage from "./components/screens/Feedback";
import { useRouter } from "next/navigation";

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


export default function HomePage() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<TAB>(TAB.Dashboard);


  // useEffect(() => {
  //   try {
  //     const tab = searchParams.get('tab');
  //     const currentTabValue = tab
  //       ? tabList.find((t) => t.label === tab)?.value
  //       : TAB.Dashboard;
  //     setCurrentTab(currentTabValue || TAB.Dashboard);
  //   } catch (error) {
  //     console.log(error);

  //   }

  //}, [searchParams]);
  const handleTabChange = (tab: TAB) => {
    const label = tabList.find((t) => t.value === tab)?.label;
    setCurrentTab(tab);
    router.push(`?tab=${label}`);
  };

  return (

    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="w-fit md:w-[20vw] h-fit md:h-full top-0">
        <NavigationBar
          selectedTab={currentTab}
          setSelectedTab={handleTabChange}
        />
      </div>
      <div className="w-full md:w-[80vw]">
        {screens.find((s) => s.label === currentTab)?.component}
      </div>
    </div>


  );
}
