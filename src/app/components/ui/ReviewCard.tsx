import { LuUser } from "react-icons/lu";




const ReviewCard = ({ review }: {
    review: {
        id: number;
        productId: number;
        userId: number;
        rating: number;
        comment: string;
        date: string;
        email: string;
        name: string;
    }
}) => {




    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-md shadow-md mb-4">
            <div className="flex items-start p-2">
                <LuUser className="text-4xl text-blue-600 mx-2 my-4" />
                <div>
                    <h2 className="text-[16px] font-semibold">{review.name}</h2>
                    <h3 className="text-sm text-gray-600">{review.email}</h3>
                    <div className="flex text-gray-400 items-center">
                    {
                        review.rating > 0 && Array.from({ length: review.rating }, (_, i) => (
                            <span key={i} className="text-2xl text-yellow-400">&#9733;</span>
                        ))
                    }
                    <span className="ml-2">{review.rating}</span>
                    </div>
                   


                    <p className="text-sm text-gray-600">{review.comment}</p>
                    <p className="text-[8px] text-gray-600 mt-2">{review.date}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard