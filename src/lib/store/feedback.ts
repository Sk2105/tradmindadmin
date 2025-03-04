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

  {
    id: 6,
    date: "2023-01-06",
    productId: "1",
    name: "John Brown",
    email: "J3V9Y@example.com",
    phone: "555-555-1234",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 7,
    date: "2023-01-07",
    productId: "2",
    name: "Jane Doe",
    email: "yV9YI@example.com",
    phone: "555-555-9876",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 8,
    date: "2023-01-08",
    productId: "3",
    name: "John Smith",
    email: "r4NwT@example.com",
    phone: "555-555-5555",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 9,
    date: "2023-01-09",
    productId: "4",
    name: "Jane Doe",
    email: "oTl0b@example.com",
    phone: "555-555-1111",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 10,
    date: "2023-01-10",
    productId: "5",
    name: "John Doe",
    email: "sTqIi@example.com",
    phone: "555-555-2222",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 11,
    date: "2023-01-11",
    productId: "1",
    name: "John Brown",
    email: "J3V9Y@example.com",
    phone: "555-555-3333",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 12,
    date: "2023-01-12",
    productId: "2",
    name: "Jane Doe",
    email: "yV9YI@example.com",
    phone: "555-555-4444",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 13,
    date: "2023-01-13",
    productId: "3",
    name: "John Smith",
    email: "r4NwT@example.com",
    phone: "555-555-5555",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 14,
    date: "2023-01-14",
    productId: "4",
    name: "Jane Doe",
    email: "oTl0b@example.com",
    phone: "555-555-6666",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 15,
    date: "2023-01-15",
    productId: "5",
    name: "John Doe",
    email: "sTqIi@example.com",
    phone: "555-555-7777",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 16,
    date: "2023-01-16",
    productId: "1",
    name: "John Brown",
    email: "J3V9Y@example.com",
    phone: "555-555-8888",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 17,
    date: "2023-01-17",
    productId: "2",
    name: "Jane Doe",
    email: "yV9YI@example.com",
    phone: "555-555-9999",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 18,
    date: "2023-01-18",
    productId: "3",
    name: "John Smith",
    email: "r4NwT@example.com",
    phone: "555-555-1234",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 19,
    date: "2023-01-19",
    productId: "4",
    name: "Jane Doe",
    email: "oTl0b@example.com",
    phone: "555-555-9876",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
  },
  {
    id: 20,
    date: "2023-01-20",
    productId: "5",
    name: "John Doe",
    email: "sTqIi@example.com",
    phone: "555-555-5555",
    message:
      "I'm interested in purchasing this product. Please tell me more about it. I have some questions about the features and how it works. Can you please provide more information about this product and how I can purchase it? I'm looking forward to hearing from you. Thank you for your time.",
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
        return (
          dummyFeedbacks.find((feedback) => feedback.id == parseInt(id)) || null
        );
      },
      updateFeedback: (feedback: Feedback) => {
        set((state) => ({
          feedbacks: state.feedbacks.map((f) =>
            f.id === feedback.id ? feedback : f
          ),
        }));
      },
    }),
    {
      name: "feedback-storage",
    }
  )
);

export default useFeedbackStore;
