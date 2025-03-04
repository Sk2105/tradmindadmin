import useFeedbackStore from "@/lib/store/feedback";
import FeedbackCard from "../ui/FeedbackCard";



export default function FeedbackPage() {

    const feedbacks = useFeedbackStore((state) => state.feedbacks);
    return (
        <div className="h-full w-full flex flex-col p-4">
            <div className="grid grid-cols-1 items-center md:grid-cols-2 p-2 h-fit  w-full">
                <h1 className="text-2xl w-fit h-fit">Feedback</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {feedbacks.map((feedback) => (
                    <FeedbackCard key={feedback.id} feedback={feedback} onClick={() => {
                        
                    }} />))}
            </div>
            
        </div>
    );
}
