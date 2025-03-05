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
  getCategoryById: (id: number) => Promise<Category | null>;
  addCategory: (category: Category) => void;
  removeCategory: (id: number) => void;
}
const dummyCategories: Category[] = [
  {
    id: 1,
    name: "Industrial Sewing",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 2,
    name: "Embroidery",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 4,
    name: "Overlock",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 5,

    name: "Coverstitch",
    image: "/Packing.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 6,
    name: "Packaging Machine",
    image: "/Packing.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 7,
    name: "Bags",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 8,
    name: "Caps",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 9,
    name: "Shoes",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 10,
    name: "Garment",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 11,
    name: "Food",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 12,
    name: "Beverages",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 13,
    name: "Automotive",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 14,
    name: "Industrial",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 15,
    name: "Electronics",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 16,
    name: "Home",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 17,
    name: "Office",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 18,
    name: "Toys",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 19,
    name: "Games",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 20,
    name: "Sports",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 21,
    name: "Clothing",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 22,
    name: "Accessories",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 23,
    name: "Tools",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 24,
    name: "Health",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 25,
    name: "Beauty",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 26,
    name: "Travel",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 27,
    name: "Baby",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 28,
    name: "Pet",
    image: "/emboadnary.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  },
  {
    id: 29,
    name: "Home Decor",
    image: "/emboadnary.jpeg",
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
      getCategoryById: async (id: number) => {
        return (
          dummyCategories.find((category) => category.id === id) ?? null
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
