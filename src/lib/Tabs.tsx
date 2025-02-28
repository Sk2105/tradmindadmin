import { AiOutlineProduct } from 'react-icons/ai';
import { FaShop } from 'react-icons/fa6';
import { LuLayoutDashboard, LuMessageCircleMore, LuUsers } from 'react-icons/lu'; // Replace 'some-module-path' with the actual path to the module
import { RiFeedbackLine } from 'react-icons/ri';
import { TbCategory } from 'react-icons/tb';

enum TAB {
    Dashboard,Product,Category,Users,Orders,Feedbacks,Enquiries
}


const tabList = [
    {label:"Dashboard",value:TAB.Dashboard,icon:<LuLayoutDashboard />},
    {label:"Products",value:TAB.Product,icon:<AiOutlineProduct />},
    {label:"Categories",value:TAB.Category,icon:<TbCategory  />},
    {label:"Users",value:TAB.Users,icon:<LuUsers />},
    {label:"Orders",value:TAB.Orders,icon:<FaShop />},
    {label:"Feedbacks",value:TAB.Feedbacks,icon:<RiFeedbackLine />},
    {label:"Enquiries",value:TAB.Enquiries,icon:<LuMessageCircleMore />},
]

export {TAB,tabList}