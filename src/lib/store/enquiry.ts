import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Enquiry {
  id: number;
  date: string;
  productId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EnquiryStore {
  enquiries: Enquiry[];
  setEnquiries: (enquiries: Enquiry[]) => void;
  getEnquiries: () => Promise<Enquiry[]>;
  getEnquiryById: (id: string) => Promise<Enquiry | null>;
  updateEnquiry: (enquiry: Enquiry) => void;
  removeEnquiry: (id: number) => void;
  getEnquiriesByProductId: (id: number) => Promise<Enquiry[]>;
}

const dummyEnquiries: Enquiry[] = [
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

const useEnquiryStore = create<EnquiryStore>()(
  persist(
    (set) => ({
      enquiries: dummyEnquiries,
      setEnquiries: (enquiries: Enquiry[]) => set({ enquiries }),
      getEnquiries: async () => dummyEnquiries,
      getEnquiryById: async (id: string) =>
        dummyEnquiries.find((enquiry) => enquiry.id === Number(id)) || null,
      updateEnquiry: (enquiry: Enquiry) =>
        set({ enquiries: [...dummyEnquiries, enquiry] }),
      removeEnquiry: (id: number) =>
        set({
          enquiries: dummyEnquiries.filter((enquiry) => enquiry.id !== id),
        }),
      getEnquiriesByProductId: async (id: number) =>
        dummyEnquiries.filter((enquiry) => enquiry.productId === id.toString()),
      
    }),
    {
      name: "enquiry-storage",
    }
  )
);

export default useEnquiryStore;
