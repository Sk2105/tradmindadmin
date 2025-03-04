import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Review {
  id: number;
  productId: number;
  userId: number;
  email: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewStore {
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
  getReviews: () => Promise<Review[]>;
  getReviewById: (id: number) => Promise<Review | null>;
  removeReview: (id: number) => void;
  getReviewsByProductId: (id: number) => Promise<Review[]>;
}
const dummyReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 4,
    comment: "Great product!",
    date: "2022-01-01",
  },
  {
    id: 2,
    productId: 1,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 5,
    comment: "Excellent quality!",
    date: "2022-02-01",
  },
  {
    id: 3,
    productId: 2,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 3,
    comment: "Decent product.",
    date: "2022-03-01",
  },
  {
    id: 4,
    productId: 2,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Good value for money.",
    date: "2022-04-01",
  },
  {
    id: 5,
    productId: 3,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 5,
    comment: "Outstanding performance!",
    date: "2022-05-01",
  },
  {
    id: 6,
    productId: 3,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Great customer service.",
    date: "2022-06-01",
  },
  {
    id: 7,
    productId: 4,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 3,
    comment: "Average product.",
    date: "2022-07-01",
  },
  {
    id: 8,
    productId: 4,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Good value for money.",
    date: "2022-08-01",
  },
  {
    id: 9,
    productId: 5,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 5,
    comment: "Excellent quality!",
    date: "2022-09-01",
  },
  {
    id: 10,
    productId: 5,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Great customer service.",
    date: "2022-10-01",
  },
  {
    id: 11,
    productId: 6,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 3,
    comment: "Average product.",
    date: "2022-11-01",
  },
  {
    id: 12,
    productId: 6,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Good value for money.",
    date: "2022-12-01",
  },
  {
    id: 13,
    productId: 7,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 5,
    comment: "Outstanding performance!",
    date: "2023-01-01",
  },
  {
    id: 14,
    productId: 7,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Great customer service.",
    date: "2023-02-01",
  },
  {
    id: 15,
    productId: 8,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 3,
    comment: "Average product.",
    date: "2023-03-01",
  },
  {
    id: 16,
    productId: 8,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Good value for money.",
    date: "2023-04-01",
  },
  {
    id: 17,
    productId: 9,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 5,
    comment: "Outstanding performance!",
    date: "2023-05-01",
  },
  {
    id: 18,
    productId: 9,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Great customer service.",
    date: "2023-06-01",
  },
  {
    id: 19,
    productId: 10,
    userId: 1,
    email: "john@example.com",
    name: "John Doe",
    rating: 3,
    comment: "Average product.",
    date: "2023-07-01",
  },
  {
    id: 20,
    productId: 10,
    userId: 2,
    email: "jane@example.com",
    name: "Jane Doe",
    rating: 4,
    comment: "Good value for money.",
    date: "2023-08-01",
  },
];

const useReviewStore = create<ReviewStore>()(
  persist(
    (set) => ({
      reviews: dummyReviews,
      setReviews: (reviews: Review[]) => set({ reviews }),
      getReviews: async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(dummyReviews);
          }, 1000);
        });
      },
      getReviewById: async (id: number) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const review = dummyReviews.find((r) => r.id === id);
            resolve(review || null);
          }, 1000);
        });
      },
      removeReview: (id: number) => set((state) => ({
        reviews: state.reviews.filter((review) => review.id !== id),
      })),
      getReviewsByProductId: async (productId: number) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const reviews = dummyReviews.filter((r) => r.productId === productId);
            resolve(reviews);
          }, 1000);
        });
      },
    }),
    {
      name: "reviews",
    }
  )
);

export default useReviewStore;
