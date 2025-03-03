import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Order {
  orderId: number;
  date: string;
  status: string;
  totalAmount: number;
  quantity: number;
  customerAddress: string;
  customerId: number;
  productId: number;
}

interface OrderStore {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  getOrders: () => Promise<Order[]>;
  getOrderById: (id: string) => Promise<Order | null>;
  updateOrder: (order: Order) => void;
}
const dummyOrders: Order[] = [
  {
    orderId: 1,
    date: "2023-01-01",
    status: "Pending",
    totalAmount: 100,
    quantity: 2,
    customerAddress: "123, ABC Street, XYZ City",
    customerId: 1,
    productId: 1,
  },
  {
    orderId: 2,
    date: "2023-01-02",
    status: "Delivered",
    totalAmount: 200,
    quantity: 3,
    customerAddress: "456, DEF Street, XYZ City",
    customerId: 2,
    productId: 2,
  },
  {
    orderId: 3,
    date: "2023-01-03",
    status: "Cancelled",
    totalAmount: 300,
    quantity: 4,
    customerAddress: "789, GHI Street, XYZ City",
    customerId: 3,
    productId: 3,
  },
  {
    orderId: 4,
    date: "2023-01-04",
    status: "Pending",
    totalAmount: 400,
    quantity: 5,
    customerAddress: "101, JKL Street, XYZ City",
    customerId: 4,
    productId: 4,
  },
  {
    orderId: 5,
    date: "2023-01-05",
    status: "Delivered",
    totalAmount: 500,
    quantity: 6,
    customerAddress: "112, MNO Street, XYZ City",
    customerId: 5,
    productId: 5,
  },
  {
    orderId: 6,
    date: "2023-01-06",
    status: "Pending",
    totalAmount: 600,
    quantity: 7,
    customerAddress: "131, PQR Street, XYZ City",
    customerId: 6,
    productId: 6,
  },
  {
    orderId: 7,
    date: "2023-01-07",
    status: "Delivered",
    totalAmount: 700,
    quantity: 8,
    customerAddress: "141, STU Street, XYZ City",
    customerId: 7,
    productId: 7,
  },
  {
    orderId: 8,
    date: "2023-01-08",
    status: "Cancelled",
    totalAmount: 800,
    quantity: 9,
    customerAddress: "151, VWX Street, XYZ City",
    customerId: 8,
    productId: 8,
  },
  {
    orderId: 9,
    date: "2023-01-09",
    status: "Pending",
    totalAmount: 900,
    quantity: 10,
    customerAddress: "161, YZ Street, XYZ City",
    customerId: 9,
    productId: 9,
  },
  {
    orderId: 10,
    date: "2023-01-10",
    status: "Delivered",
    totalAmount: 1000,
    quantity: 11,
    customerAddress: "171, ABCD Street, XYZ City",
    customerId: 10,
    productId: 10,
  },
];

const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      orders: dummyOrders,
      setOrders: (orders: Order[]) => set({ orders }),
      getOrders: async () => dummyOrders,
      getOrderById: async (id: string) =>
        dummyOrders.find((order) => order.orderId === Number(id)) || null,
      updateOrder: (order: Order) =>
        set({
          orders: dummyOrders.map((o) =>
            o.orderId === order.orderId ? order : o
          ),
        }),
    }),
    {
      name: "order-storage",
    }
  )
);

export default useOrderStore;
