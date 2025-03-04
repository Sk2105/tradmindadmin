

const FeedbackCard = ({ feedback,onClick }: {
    feedback: {
        id: number;
        date: string;
        productId: string;
        name: string;
        email: string;
        phone: string;
        message: string;
    },
    onClick: () => void
}) => {

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold">{feedback.name}</h3>
            <p className="text-gray-400 text-sm">Email: {feedback.email}</p>
            <p className="text-gray-400 text-sm">Phone: {feedback.phone}</p>
            <p className="text-gray-600 my-2">{feedback.message.substring(0, 100)}...<span className="font-semibold">Read More</span></p>
            <p className="text-[12px] text-gray-600 mb-2">Date: {feedback.date}</p>
            <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl text-sm">View</button>

        </div>
    );

}

export default FeedbackCard