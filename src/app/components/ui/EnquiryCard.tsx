import { LuUser } from "react-icons/lu";



type Enquiry = {
    id: number;
    date: string;
    productId: string;
    name: string;
    email: string;
    phone: string;
    message: string;
}
const EnquiryCard = ({
    enquiry
}: {
    enquiry: Enquiry
}) => {


    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md mb-4">
            <div className="flex items-start">
                <LuUser className="text-4xl text-blue-600 m-2" />
                <div>
                    <h2 className="text-[16px] font-semibold m-1">{enquiry.name}</h2>
                    <p className="text-[12px] text-gray-600">📧{enquiry.email}</p>
                    <p className="text-[12px] text-gray-600">📞{enquiry.phone}</p>
                    <p className="text-sm text-gray-600 my-2">{enquiry.message}</p>
                    <p className="text-[10px] text-gray-600">📅{enquiry.date}</p>
                </div>
            </div>
        </div>
    );

}

export default EnquiryCard