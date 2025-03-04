import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  getProducts: () => Promise<Product[]>;
  getProductById: (id: number) => Promise<Product | null>;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Bar Tacking Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/bar-tacking-machine-250x250.jpg",
    price: 149999,
    stock: 5,
  },
  {
    id: 2,
    title: "Bernina Sewing Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/bernina-sewing-machine-250x250.jpg",
    price: 299999,
    stock: 3,
  },
  {
    id: 3,
    title: "Bobbin Elastic Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/bobbin-elastic-machine-250x250.jpg",
    price: 189999,
    stock: 4,
  },
  {
    id: 4,
    title: "Industrial Sewing Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/industrial-sewing-machine-250x250.jpg",
    price: 249999,
    stock: 2,
  },
  {
    id: 5,
    title: "Multi Needle Sewing Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/multi-needle-sewing-machine-250x250.jpg",
    price: 399999,
    stock: 3,
  },
  {
    id: 6,
    title: "PFAFF Sewing Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/pfaff-sewing-machine-250x250.jpg",
    price: 449999,
    stock: 2,
  },
  {
    id: 7,
    title: "Piece End Joining Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/piece-end-joining-machine-250x250.jpg",
    price: 299999,
    stock: 4,
  },
  {
    id: 8,
    title: "Ultrasonic Sewing Machine",
    description: "Industrial Sewing Machine",
    category: "Industrial Sewing",
    image: "/ultrasonic-sewing-machine-250x250.jpg",
    price: 599999,
    stock: 1,
  },
  {
    id: 9,
    title: "Blade Grinding Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/blade-grinding-machine-250x250.jpg",
    price: 399999,
    stock: 3,
  },
  {
    id: 10,
    title: "Crankshaft Grinder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/crankshaft-grinder-250x250.jpg",
    price: 449999,
    stock: 2,
  },
  {
    id: 11,
    title: "Cutter Grinder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/cutter-grinder-250x250.jpg",
    price: 299999,
    stock: 4,
  },
  {
    id: 12,
    title: "Cylindrical Grinding Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/cylindrical-grinding-machine-250x250.jpg",
    price: 599999,
    stock: 3,
  },
  {
    id: 13,
    title: "Duplex Grinder Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/duplex-grinder-machine-250x250.jpg",
    price: 499999,
    stock: 2,
  },
  {
    id: 14,
    title: "Face Grinding Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/face-grinding-machine-250x250.jpg",
    price: 349999,
    stock: 4,
  },
  {
    id: 15,
    title: "Needle Grinding Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/needle-grinding-machine-250x250.jpg",
    price: 279999,
    stock: 3,
  },
  {
    id: 16,
    title: "Profile Grinders",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/profile-grinders-250x250.jpg",
    price: 399999,
    stock: 2,
  },
  {
    id: 17,
    title: "Slideway Grinding Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Grinding",
    image: "/slideway-grinding-machine-250x250.jpg",
    price: 649999,
    stock: 1,
  },
  {
    id: 18,
    title: "Liquid Packaging Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Packaging",
    image: "/liquid-packaging-machinery-250x250.jpg",
    price: 899999,
    stock: 3,
  },
  {
    id: 19,
    title: "Pouch Packaging Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Packaging",
    image: "/pouch-packaging-machines-250x250.jpg",
    price: 699999,
    stock: 4,
  },
  {
    id: 20,
    title: "Powder Packaging Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Packaging",
    image: "/powder-packaging-machine-250x250.jpg",
    price: 799999,
    stock: 2,
  },
  {
    id: 21,
    title: "Snacks Packaging Machine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Packaging",
    image: "/snacks-packaging-machine-250x250.jpg",
    price: 599999,
    stock: 5,
  },
  {
    id: 22,
    title: "Rice Flour Mill",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Food Processing",
    image: "/rice-flour-mill-250x250.jpg",
    price: 399999,
    stock: 3,
  },
  {
    id: 23,
    title: "Solar Atta Chakki",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    category: "Food Processing",
    image: "/solar-atta-chakki-250x250.jpg",
    price: 299999,
    stock: 4,
  },
];

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      products: ([] = dummyProducts),
      setProducts: (products: Product[]) => set({ products }),
      getProducts: async () => {
        return dummyProducts;
      },
      getProductById: async (id: number) => {
        return (
          dummyProducts.find((product) => product.id === Number(id)) || null
        );
      },
      addProduct: (product: Product) =>
        set((state) => ({ products: [...state.products, product] })),
      removeProduct: (id: number) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
    }),
    {
      name: "product-storage",
    }
  )
);

export default useProductStore;
