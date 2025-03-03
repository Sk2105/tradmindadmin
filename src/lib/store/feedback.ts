import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Feedback {
    id: number;
    date: string;
    productId: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    }

interface FeedbackStore {
    feedbacks: Feedback[];
    setFeedbacks: (feedbacks: Feedback[]) => void;
    getFeedbacks: () => Promise<Feedback[]>;
    getFeedbackById: (id: string) => Promise<Feedback | null>;
    updateFeedback: (feedback: Feedback) => void;
}

const dummyFeedbacks: Feedback[] = [
    {
        id: 1,
        date: "2023-01-01",
        productId: "1",
        name: "John Doe",
        email: "M2N2t@example.com",
        phone: "1234567890",
        message: "I want to know more about this product",
    },
    {
        id: 2,
        date: "2023-01-02",
        productId: "2",
        name: "Jane Doe",
        email: "yV9YI@example.com",
        phone: "9876543210",
        message: "I'm interested in this product",
    },
    {
        id: 3,
        date: "2023-01-03",
        productId: "3",
        name: "John Smith",
        email: "r4NwT@example.com",
        phone: "5555555555",
        message: "I have a question about this product",
    },
    {
        id: 4,
        date: "2023-01-04",
        productId: "4",
        name: "Jane Smith",
        email: "oTl0b@example.com",
        phone: "1111111111",
        message: "I'm interested in this product",
    },
    {
        id: 5,
        date: "2023-01-05",
        productId: "5",
        name: "John Doe",
        email: "sTqIi@example.com",
        phone: "2222222222",
        message: "I want to know more about this product",
    },

];

const useFeedbackStore = create<FeedbackStore>()(
    persist(
        (set) => ({
            feedbacks: ([] = dummyFeedbacks),
            setFeedbacks: (feedbacks: Feedback[]) => set({ feedbacks }),
            getFeedbacks: async () => {
                return dummyFeedbacks;
            },
            getFeedbackById: async (id: string) => {
                return dummyFeedbacks.find((feedback) => feedback.id == parseInt(id)) || null;
            },
            updateFeedback: (feedback: Feedback) => {
                set((state) => ({
                    feedbacks: state.feedbacks.map((f) => (f.id === feedback.id ? feedback : f)),
                }));
            },
        }),
        {
            name: "feedback-storage",
        }
    )
);

export default useFeedbackStore;
