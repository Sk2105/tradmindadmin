'use client'
import useEnquiryStore from "@/lib/store/enquiry";
import EnquiryCard from "../ui/EnquiryCard";


const Enquiries = () => {
    const enquiries = useEnquiryStore((state) => state.enquiries);
    return (
        <div className="h-full w-full flex flex-col p-4">
            <div className="grid grid-cols-1 items-center md:grid-cols-2 p-2 h-fit  w-full">
                <h1 className="text-2xl w-fit h-fit">Enquiries</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {enquiries.map((enquiry) => (
                    <EnquiryCard key={enquiry.id} enquiry={enquiry} />))}
            </div>

        </div>
    );
}

export default Enquiries