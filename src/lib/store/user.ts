import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: number;
  email: string;
  name: string;
  phoneNo: string;
  address: string;
  role: "buyer";
}

interface UsersStore {
  users: User[];
  setUsers: (users: User[]) => void;
  getUsers: () => Promise<User[]>;
  getUserById: (id: number) => Promise<User | null>;
}

const dummyUsers: User[] = [
  {
    id: 1,
    email: "V5Pf1@example.com",
    name: "John Doe",
    phoneNo: "1234567890",
    address: "123, ABC Street, XYZ City",
    role: "buyer",
  },
  {
    id: 2,
    email: "skRbI@example.com",
    name: "Jane Doe",
    phoneNo: "9876543210",
    address: "456, DEF Street, XYZ City",
    role: "buyer",
  },
  {
    id: 3,
    email: "kyTt1@example.com",
    name: "John Smith",
    phoneNo: "5555555555",
    address: "789, GHI Street, XYZ City",
    role: "buyer",
  },
  {
    id: 4,
    email: "a0oJb@example.com",
    name: "Jane Smith",
    phoneNo: "1111111111",
    address: "101, JKL Street, XYZ City",
    role: "buyer",
  },
  {
    id: 5,
    email: "6gTtU@example.com",
    name: "John Wick",
    phoneNo: "2222222222",
    address: "202, MNO Street, XYZ City",
    role: "buyer",
  },
  {
    id: 6,
    email: "iOgk2@example.com",
    name: "John Cena",
    phoneNo: "3333333333",
    address: "303, PQR Street, XYZ City",
    role: "buyer",
  },
  {
    id: 7,
    email: "MjB8S@example.com",
    name: "Jane Doe",
    phoneNo: "4444444444",
    address: "404, STU Street, XYZ City",
    role: "buyer",
  },
  {
    id: 8,
    email: "Y6k8N@example.com",
    name: "John Smith",
    phoneNo: "5555555555",
    address: "505, VWX Street, XYZ City",
    role: "buyer",
  },
  {
    id: 9,
    email: "wH0pJ@example.com",
    name: "John Brown",
    phoneNo: "6666666666",
    address: "606, YZX Street, XYZ City",
    role: "buyer",
  },
  {
    id: 10,
    email: "jF7iN@example.com",
    name: "Jane Williams",
    phoneNo: "7777777777",
    address: "707, WUV Street, XYZ City",
    role: "buyer",
  },
  {
    id: 11,
    email: "7hT7G@example.com",
    name: "John Jones",
    phoneNo: "8888888888",
    address: "808, TQS Street, XYZ City",
    role: "buyer",
  },
  {
    id: 12,
    email: "fJ9kR@example.com",
    name: "Jane Davis",
    phoneNo: "9999999999",
    address: "909, RQP Street, XYZ City",
    role: "buyer",
  },
  {
    id: 13,
    email: "rH4pQ@example.com",
    name: "John Miller",
    phoneNo: "1010101010",
    address: "1010, ONM Street, XYZ City",
    role: "buyer",
  },
  {
    id: 14,
    email: "bO3vV@example.com",
    name: "Jane Wilson",
    phoneNo: "1111111111",
    address: "1111, LKJ Street, XYZ City",
    role: "buyer",
  },
  {
    id: 15,
    email: "xT9iK@example.com",
    name: "John Moore",
    phoneNo: "1212121212",
    address: "1212, IHG Street, XYZ City",
    role: "buyer",
  },
  {
    id: 16,
    email: "eJ1lX@example.com",
    name: "Jane Taylor",
    phoneNo: "1313131313",
    address: "1313, FED Street, XYZ City",
    role: "buyer",
  },
  {
    id: 17,
    email: "dM6fL@example.com",
    name: "John Anderson",
    phoneNo: "1414141414",
    address: "1414, CBA Street, XYZ City",
    role: "buyer",
  },
  {
    id: 18,
    email: "mO4tZ@example.com",
    name: "Jane Thomas",
    phoneNo: "1515151515",
    address: "1515, KLM Street, XYZ City",
    role: "buyer",
  },
  {
    id: 19,
    email: "yG1oN@example.com",
    name: "John Jackson",
    phoneNo: "1616161616",
    address: "1616, JKL Street, XYZ City",
    role: "buyer",
  },
  {
    id: 20,
    email: "hN3cR@example.com",
    name: "Jane White",
    phoneNo: "1717171717",
    address: "1717, MNO Street, XYZ City",
    role: "buyer",
  },
  {
    id: 21,
    email: "nV6kM@example.com",
    name: "John Brown",
    phoneNo: "1818181818",
    address: "1818, PQR Street, XYZ City",
    role: "buyer",
  },
  {
    id: 22,
    email: "rF9uI@example.com",
    name: "Jane Davis",
    phoneNo: "1919191919",
    address: "1919, STU Street, XYZ City",
    role: "buyer",
  },
  {
    id: 23,
    email: "jH5qV@example.com",
    name: "John Garcia",
    phoneNo: "2020202020",
    address: "2020, VWX Street, XYZ City",
    role: "buyer",
  },
  {
    id: 24,
    email: "kM8rG@example.com",
    name: "Jane Rodriguez",
    phoneNo: "2121212121",
    address: "2121, YZ Street, XYZ City",
    role: "buyer",
  },
  {
    id: 25,
    email: "lO4xB@example.com",
    name: "John Martin",
    phoneNo: "2222222222",
    address: "2222, ABCD Street, XYZ City",
    role: "buyer",
  },
  {
    id: 26,
    email: "aT9iK@example.com",
    name: "Jane Lewis",
    phoneNo: "2323232323",
    address: "2323, EFGH Street, XYZ City",
    role: "buyer",
  },
  {
    id: 27,
    email: "pU3lX@example.com",
    name: "John Walker",
    phoneNo: "2424242424",
    address: "2424, IJKL Street, XYZ City",
    role: "buyer",
  },
  {
    id: 28,
    email: "qM6fL@example.com",
    name: "Jane Hall",
    phoneNo: "2525252525",
    address: "2525, MNOP Street, XYZ City",
    role: "buyer",
  },
  {
    id: 29,
    email: "wO4tZ@example.com",
    name: "John Allen",
    phoneNo: "2626262626",
    address: "2626, QRST Street, XYZ City",
    role: "buyer",
  },
  {
    id: 30,
    email: "zG1oN@example.com",
    name: "Jane Young",
    phoneNo: "2727272727",
    address: "2727, UVWX Street, XYZ City",
    role: "buyer",
  },
  {
    id: 31,
    email: "vN3cR@example.com",
    name: "John Hernandez",
    phoneNo: "2828282828",
    address: "2828, YZ Street, XYZ City",
    role: "buyer",
  },
  {
    id: 32,
    email: "sH4pQ@example.com",
    name: "Jane King",
    phoneNo: "2929292929",
    address: "2929, ABCD Street, XYZ City",
    role: "buyer",
  },
  {
    id: 33,
    email: "tO3vV@example.com",
    name: "John Watson",
    phoneNo: "3030303030",
    address: "3030, EFGH Street, XYZ City",
    role: "buyer",
  },
  {
    id: 34,
    email: "uT9iK@example.com",
    name: "Jane Brooks",
    phoneNo: "3131313131",
    address: "3131, IJKL Street, XYZ City",
    role: "buyer",
  },
  {
    id: 35,
    email: "xJ1lX@example.com",
    name: "John Price",
    phoneNo: "3232323232",
    address: "3232, MNOP Street, XYZ City",
    role: "buyer",
  },
  {
    id: 36,
    email: "yM6fL@example.com",
    name: "Jane Jenkins",
    phoneNo: "3333333333",
    address: "3333, QRST Street, XYZ City",
    role: "buyer",
  },
  {
    id: 37,
    email: "zO4tZ@example.com",
    name: "John Perry",
    phoneNo: "3434343434",
    address: "3434, UVWX Street, XYZ City",
    role: "buyer",
  },
  {
    id: 38,
    email: "aG1oN@example.com",
    name: "Jane Powell",
    phoneNo: "3535353535",
    address: "3535, YZ Street, XYZ City",
    role: "buyer",
  },
  {
    id: 39,
    email: "bN3cR@example.com",
    name: "John Russell",
    phoneNo: "3636363636",
    address: "3636, ABCD Street, XYZ City",
    role: "buyer",
  },
  {
    id: 40,
    email: "cH4pQ@example.com",
    name: "Jane Sanchez",
    phoneNo: "3737373737",
    address: "3737, EFGH Street, XYZ City",
    role: "buyer",
  },
];

const useUsersStore = create<UsersStore>()(
  persist(
    (set) => ({
      users: dummyUsers,
      setUsers: (users: User[]) => set({ users }),
      getUsers: async () => new Promise((resolve) => resolve(dummyUsers)),
      getUserById: async (id: number) =>
        new Promise((resolve) =>
          resolve(dummyUsers.find((user) => user.id === id) || null)
        ),
    }),
    {
      name: "users-storage",
    }
  )
);

export default useUsersStore;
