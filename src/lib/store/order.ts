import { create } from "zustand";

interface ShippingStatus {
  id: number;
  date: string;
  status: string;
  message?: string;
}

interface Order {
  orderId: number;
  date: string;
  status: string;
  totalAmount: number;
  quantity: number;
  customerAddress: string;
  customerId: number;
  productId: number;
  deliveredDate?: string;
  shippingStatus: ShippingStatus[];
}

interface OrderStore {
  orders: Order[];
  setOrders: (orders: Order[]) => void;
  getOrders: () => Promise<Order[]>;
  getOrderById: (id: number) => Promise<Order | null>;
  updateOrder: (order: Order) => Promise<void>;
  getOrdersByProductId: (id: number) => Promise<Order[]>;
}
const dummyOrders: Order[] = [
  {
    orderId: 1,
    date: "2023-01-01",
    status: "Delivered",
    deliveredDate: "2023-01-10",
    totalAmount: 100,
    quantity: 2,
    customerAddress: "123, ABC Street, XYZ City",
    customerId: 1,
    productId: 1,
    shippingStatus: [
      {
        id: 1,
        date: "2023-01-01",
        status: "Ordered",
      },
      {
        id: 2,
        date: "2023-01-02",
        status: "Shipped",
      },
      {
        id: 3,
        date: "2023-01-05",
        status: "Delivered",
      },
    ],
  },
  {
    orderId: 2,
    date: "2023-01-02",
    status: "Delivered",
    deliveredDate: "2023-01-15",
    totalAmount: 200,
    quantity: 3,
    customerAddress: "456, DEF Street, XYZ City",
    customerId: 2,
    productId: 2,
    shippingStatus: [
      {
        id: 4,
        date: "2023-01-02",
        status: "Ordered",
      },
      {
        id: 5,
        date: "2023-01-03",
        status: "Shipped",
      },
      {
        id: 6,
        date: "2023-01-08",
        status: "Delivered",
      },
    ],
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
    shippingStatus: [
      {
        id: 7,
        date: "2023-01-03",
        status: "Ordered",
      },
      {
        id: 8,
        date: "2023-01-04",
        status: "Shipped",
      },
      {
        id: 9,
        date: "2023-01-05",
        status: "Cancelled",
      },
    ],
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
    shippingStatus: [
      {
        id: 10,
        date: "2023-01-04",
        status: "Ordered",
      },
    ],
  },
  {
    orderId: 5,
    date: "2023-01-05",
    status: "Delivered",
    deliveredDate: "2023-01-20",
    totalAmount: 500,
    quantity: 6,
    customerAddress: "112, MNO Street, XYZ City",
    customerId: 5,
    productId: 5,
    shippingStatus: [
      {
        id: 11,
        date: "2023-01-05",
        status: "Ordered",
      },
      {
        id: 12,
        date: "2023-01-06",
        status: "Shipped",
      },
      {
        id: 13,
        date: "2023-01-15",
        status: "Delivered",
      },
    ],
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
    shippingStatus: [
      {
        id: 14,
        date: "2023-01-06",
        status: "Ordered",
      },
    ],
  },
  {
    orderId: 7,
    date: "2023-01-07",
    status: "Delivered",
    deliveredDate: "2023-01-25",
    totalAmount: 700,
    quantity: 8,
    customerAddress: "141, STU Street, XYZ City",
    customerId: 7,
    productId: 7,
    shippingStatus: [
      {
        id: 15,
        date: "2023-01-07",
        status: "Ordered",
      },
      {
        id: 16,
        date: "2023-01-08",
        status: "Shipped",
      },
      {
        id: 17,
        date: "2023-01-22",
        status: "Delivered",
      },
    ],
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
    shippingStatus: [
      {
        id: 18,
        date: "2023-01-08",
        status: "Ordered",
      },
      {
        id: 19,
        date: "2023-01-09",
        status: "Shipped",
      },
      {
        id: 20,
        date: "2023-01-10",
        status: "Cancelled",
      },
    ],
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
    shippingStatus: [
      {
        id: 21,
        date: "2023-01-09",
        status: "Ordered",
      },
    ],
  },
  {
    orderId: 10,
    date: "2023-01-10",
    status: "Delivered",
    deliveredDate: "2023-02-01",
    totalAmount: 1000,
    quantity: 11,
    customerAddress: "171, ABCD Street, XYZ City",
    customerId: 10,
    productId: 10,
    shippingStatus: [
      {
        id: 22,
        date: "2023-01-10",
        status: "Ordered",
      },
      {
        id: 23,
        date: "2023-01-11",
        status: "Shipped",
      },
      {
        id: 24,
        date: "2023-01-28",
        status: "Delivered",
      },
    ],
  },
  {
    orderId: 11,
    date: "2023-01-11",
    status: "Pending",
    totalAmount: 1100,
    quantity: 12,
    customerAddress: "181, EFGH Street, XYZ City",
    customerId: 11,
    productId: 11,
    shippingStatus: [
      {
        id: 25,
        date: "2023-01-11",
        status: "Ordered",
      },
    ],
  },
  {
    orderId: 12,
    date: "2023-01-12",
    status: "Delivered",
    deliveredDate: "2023-02-05",
    totalAmount: 1200,
    quantity: 13,
    customerAddress: "191, IJKL Street, XYZ City",
    customerId: 12,
    productId: 12,
    shippingStatus: [
      {
        id: 26,
        date: "2023-01-12",
        status: "Ordered",
      },
      {
        id: 27,
        date: "2023-01-13",
        status: "Shipped",
      },
      {
        id: 28,
        date: "2023-01-29",
        status: "Delivered",
      },
    ],
  },
  {
    orderId: 13,
    date: "2023-01-13",
    status: "Cancelled",
    totalAmount: 1300,
    quantity: 14,
    customerAddress: "201, MNOP Street, XYZ City",
    customerId: 13,
    productId: 13,
    shippingStatus: [
      {
        id: 29,
        date: "2023-01-13",
        status: "Ordered",
      },
      {
        id: 30,
        date: "2023-01-14",
        status: "Shipped",
      },
      {
        id: 31,
        date: "2023-01-15",
        status: "Cancelled",
      },
    ],
  },
  {
    orderId: 14,
    date: "2023-01-14",
    status: "Pending",
    totalAmount: 1400,
    quantity: 15,
    customerAddress: "211, QRST Street, XYZ City",
    customerId: 14,
    productId: 14,
    shippingStatus: [
      {
        id: 32,
        date: "2023-01-14",
        status: "Ordered",
      },
    ],
  },
  {
    orderId: 15,
    date: "2023-01-15",
    status: "Delivered",
    deliveredDate: "2023-02-08",
    totalAmount: 1500,
    quantity: 16,
    customerAddress: "221, UVWX Street, XYZ City",
    customerId: 15,
    productId: 15,
    shippingStatus: [
      {
        id: 33,
        date: "2023-01-15",
        status: "Ordered",
      },
      {
        id: 34,
        date: "2023-01-16",
        status: "Shipped",
      },
      {
        id: 35,
        date: "2023-01-30",
        status: "Delivered",
      },
    ],
  },
  {
    orderId: 16,
    date: "2023-01-16",
    status: "Pending",
    totalAmount: 1600,
    quantity: 17,
    customerAddress: "231, VWXY Street, XYZ City",
    customerId: 16,
    productId: 16,
    shippingStatus: [
      {
        id: 36,
        date: "2023-01-16",
        status: "Ordered",
      },
    ],
  },
  {
    orderId: 17,
    date: "2023-01-17",
    status: "Pending",
    totalAmount: 1700,
    quantity: 18,
    customerAddress: "241, ABCD Street, XYZ City",
    customerId: 17,
    productId: 17,
    shippingStatus: [
      {
        id: 37,
        date: "2023-01-17",
        status: "Ordered",
      },
    ],
  },
]

const useOrderStore = create<OrderStore>((set) => ({
  orders: dummyOrders,
  setOrders: (orders: Order[]) => set({ orders }),
  getOrders: async () => Promise.resolve(dummyOrders),
  getOrderById: async (id: number) =>
    dummyOrders.find((order) => order.orderId === id) || null,
  updateOrder: (order: Order) => {
    return new Promise((resolve, reject) => {
      const index = dummyOrders.findIndex((o) => o.orderId === order.orderId);
      if (index !== -1) {
        dummyOrders[index] = order;
        resolve();
      } else {
        reject(new Error("Order not found"));
      }
    });
  }
  ,
  getOrdersByProductId: async (id: number) =>
    Promise.resolve(dummyOrders.filter((order) => order.productId === id)),
}));
export default useOrderStore;
