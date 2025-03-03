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
