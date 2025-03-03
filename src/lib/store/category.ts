import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Category {
  id: number;
  name: string;
  description?: string;
  image?: string;
}

interface CategoryStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  getCategories: () => Promise<Category[]>;
  getCategoryById: (id: string) => Promise<Category | null>;
  addCategory: (category: Category) => void;
  removeCategory: (id: number) => void;
}
const dummyCategories: Category[] = [
  {
    id: 1,
    name: "Industrial Sewing",
    image: "./emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 2,
    name: "Embroidery",
    image: "./emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 4,
    name: "Overlock",
    image: "./emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 5,

    name: "Coverstitch",
    image: "./Packing.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 6,
    name: "Packaging Machine",
    image: "./Packing.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
];

export const useCategoryStore = create<CategoryStore>()(
  persist(
    (set) => ({
      categories: dummyCategories,
      setCategories: (categories) => set({ categories }),
      getCategories: async () => {
        return dummyCategories;
      },
      getCategoryById: async (id) => {
        const categoryId = parseInt(id, 10);
        return (
          dummyCategories.find((category) => category.id === categoryId) ?? null
        );
      },
      addCategory: (category) => {
        dummyCategories.push(category);
        set({ categories: dummyCategories });
      },
      removeCategory: (id) => {
        const index = dummyCategories.findIndex(
          (category) => category.id === id
        );
        dummyCategories.splice(index, 1);
        set({ categories: dummyCategories });
      },
    }),
    { name: "category-store" }
  )
);
