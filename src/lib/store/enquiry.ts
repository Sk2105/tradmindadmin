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

  {
    id: 6,
    date: "2023-01-06",
    productId: "1",
    name: "John Brown",
    email: "fTl0b@example.com",
    phone: "3333333333",
    message: "I'm interested in this product",
  },
  {
    id: 7,
    date: "2023-01-07",
    productId: "2",
    name: "Jane Brown",
    email: "r4NwT@example.com",
    phone: "4444444444",
    message: "I want to know more about this product",
  },
  {
    id: 8,
    date: "2023-01-08",
    productId: "3",
    name: "John Doe",
    email: "sTqIi@example.com",
    phone: "5555555555",
    message: "I have a question about this product",
  },
  {
    id: 9,
    date: "2023-01-09",
    productId: "4",
    name: "John Lee",
    email: "h3X9l@example.com",
    phone: "6666666666",
    message: "I'm interested in this product",
  },
  {
    id: 10,
    date: "2023-01-10",
    productId: "5",
    name: "Jane Lee",
    email: "x4C5o@example.com",
    phone: "7777777777",
    message: "I want to know more about this product",
  },
  {
    id: 11,
    date: "2023-01-11",
    productId: "1",
    name: "Jim Doe",
    email: "ZJj1F@example.com",
    phone: "8888888888",
    message: "I have a question about this product",
  },
  {
    id: 12,
    date: "2023-01-12",
    productId: "2",
    name: "John Smith",
    email: "ZJj1F@example.com",
    phone: "9999999999",
    message: "I'm interested in this product",
  },
  {
    id: 13,
    date: "2023-01-13",
    productId: "3",
    name: "Jane Doe",
    email: "h3X9l@example.com",
    phone: "1010101010",
    message: "I want to know more about this product",
  },
  {
    id: 14,
    date: "2023-01-14",
    productId: "4",
    name: "John Brown",
    email: "x4C5o@example.com",
    phone: "1111111111",
    message: "I have a question about this product",
  },
  {
    id: 15,
    date: "2023-01-15",
    productId: "5",
    name: "Jim Doe",
    email: "ZJj1F@example.com",
    phone: "2222222222",
    message: "I'm interested in this product",
  },
  {
    id: 16,
    date: "2023-01-16",
    productId: "1",
    name: "John Smith",
    email: "ZJj1F@example.com",
    phone: "3333333333",
    message: "I want to know more about this product",
  },
  {
    id: 17,
    date: "2023-01-17",
    productId: "2",
    name: "Jane Doe",
    email: "h3X9l@example.com",
    phone: "4444444444",
    message: "I have a question about this product",
  },
  {
    id: 18,
    date: "2023-01-18",
    productId: "3",
    name: "John Lee",
    email: "x4C5o@example.com",
    phone: "5555555555",
    message: "I'm interested in this product",
  },
  {
    id: 19,
    date: "2023-01-19",
    productId: "4",
    name: "John Brown",
    email: "ZJj1F@example.com",
    phone: "6666666666",
    message: "I want to know more about this product",
  },
  {
    id: 20,
    date: "2023-01-20",
    productId: "5",
    name: "Jim Doe",
    email: "h3X9l@example.com",
    phone: "7777777777",
    message: "I have a question about this product",
  },
  {
    id: 21,
    date: "2023-01-21",
    productId: "1",
    name: "John Smith",
    email: "x4C5o@example.com",
    phone: "8888888888",
    message: "I'm interested in this product",
  },
  {
    id: 22,
    date: "2023-01-22",
    productId: "2",
    name: "Jane Doe",
    email: "ZJj1F@example.com",
    phone: "9999999999",
    message: "I want to know more about this product",
  },
  {
    id: 23,
    date: "2023-01-23",
    productId: "3",
    name: "John Lee",
    email: "h3X9l@example.com",
    phone: "1010101010",
    message: "I have a question about this product",
  },
  {
    id: 24,
    date: "2023-01-24",
    productId: "4",
    name: "John Brown",
    email: "x4C5o@example.com",
    phone: "1111111111",
    message: "I'm interested in this product",
  },
  {
    id: 25,
    date: "2023-01-25",
    productId: "5",
    name: "Jim Doe",
    email: "ZJj1F@example.com",
    phone: "2222222222",
    message: "I want to know more about this product",
  },
  {
    id: 26,
    date: "2023-01-26",
    productId: "1",
    name: "John Smith",
    email: "h3X9l@example.com",
    phone: "3333333333",
    message: "I have a question about this product",
  },
  {
    id: 27,
    date: "2023-01-27",
    productId: "2",
    name: "Jane Doe",
    email: "x4C5o@example.com",
    phone: "4444444444",
    message: "I'm interested in this product",
  },
  {
    id: 28,
    date: "2023-01-28",
    productId: "3",
    name: "John Lee",
    email: "ZJj1F@example.com",
    phone: "5555555555",
    message: "I want to know more about this product",
  },
  {
    id: 29,
    date: "2023-01-29",
    productId: "4",
    name: "John Brown",
    email: "h3X9l@example.com",
    phone: "6666666666",
    message: "I have a question about this product",
  },
  {
    id: 30,
    date: "2023-01-30",
    productId: "5",
    name: "Jim Doe",
    email: "x4C5o@example.com",
    phone: "7777777777",
    message: "I'm interested in this product",
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
