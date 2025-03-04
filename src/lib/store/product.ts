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
    description: "The Bar Tacking Machine is an essential piece of equipment in the industrial sewing sector. It is specifically designed to reinforce areas of a garment that are subject to stress or additional wear. This machine is commonly used for attaching belt loops, pocket corners, and other areas that require extra strength. The Bar Tacking Machine operates with precision and speed, ensuring that each tack is consistent and secure. It features an adjustable stitch length and width, allowing for customization based on the specific needs of the project. The machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Additionally, it is equipped with an automatic thread trimming system, which enhances efficiency and reduces manual labor. The user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on denim, canvas, or other heavy fabrics, the Bar Tacking Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any sewing operation.",
    category: "Industrial Sewing",
    image: "/bar-tacking-machine-250x250.jpg",
    price: 149999,
    stock: 5,
  },
  {
    id: 2,
    title: "Bernina Sewing Machine",
    description: "The Bernina Sewing Machine is a top-of-the-line industrial sewing machine known for its precision, reliability, and versatility. This machine is designed to handle a wide range of sewing tasks, from basic stitching to complex embroidery. It features a powerful motor that ensures smooth and consistent operation, even when working with heavy fabrics. The Bernina Sewing Machine comes with a variety of stitch options, including straight stitch, zigzag, and decorative stitches, allowing for creative freedom and customization. The machine is equipped with an automatic needle threader and thread cutter, making the sewing process more efficient and reducing downtime. The adjustable presser foot pressure and feed dog system ensure optimal fabric control and prevent puckering or stretching. The Bernina Sewing Machine also includes a large work area with an extension table, providing ample space for larger projects. Its intuitive LCD screen and easy-to-navigate menu make it user-friendly and suitable for both beginners and experienced sewers. With its durable construction and high-quality components, the Bernina Sewing Machine is built to withstand the demands of industrial use and deliver exceptional results every time.",
    category: "Industrial Sewing",
    image: "/bernina-sewing-machine-250x250.jpg",
    price: 299999,
    stock: 3,
  },
  {
    id: 3,
    title: "Bobbin Elastic Machine",
    description: "The Bobbin Elastic Machine is a specialized industrial sewing machine designed for attaching elastic bands to garments and other textile products. This machine is ideal for producing items such as underwear, swimwear, and sportswear, where elastic bands are commonly used. The Bobbin Elastic Machine features a high-speed motor and a precise feeding mechanism, ensuring consistent and accurate placement of the elastic bands. It is equipped with an adjustable tension control system, allowing for customization based on the type and thickness of the elastic being used. The machine also includes an automatic cutting system, which trims the elastic to the desired length, reducing manual labor and increasing efficiency. The Bobbin Elastic Machine is built with a sturdy frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Bobbin Elastic Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any sewing operation.",
    category: "Industrial Sewing",
    image: "/bobbin-elastic-machine-250x250.jpg",
    price: 189999,
    stock: 4,
  },
  {
    id: 4,
    title: "Industrial Sewing Machine",
    description: "The Industrial Sewing Machine is a versatile and powerful piece of equipment designed for a wide range of sewing applications. This machine is suitable for both light and heavy fabrics, making it ideal for various industries, including fashion, upholstery, and automotive. The Industrial Sewing Machine features a high-speed motor and a robust feeding system, ensuring smooth and consistent operation. It comes with a variety of stitch options, including straight stitch, zigzag, and decorative stitches, allowing for creative freedom and customization. The machine is equipped with an automatic needle threader and thread cutter, making the sewing process more efficient and reducing downtime. The adjustable presser foot pressure and feed dog system ensure optimal fabric control and prevent puckering or stretching. The Industrial Sewing Machine also includes a large work area with an extension table, providing ample space for larger projects. Its intuitive LCD screen and easy-to-navigate menu make it user-friendly and suitable for both beginners and experienced sewers. With its durable construction and high-quality components, the Industrial Sewing Machine is built to withstand the demands of industrial use and deliver exceptional results every time.",
    category: "Industrial Sewing",
    image: "/industrial-sewing-machine-250x250.jpg",
    price: 249999,
    stock: 2,
  },
  {
    id: 5,
    title: "Multi Needle Sewing Machine",
    description: "The Multi Needle Sewing Machine is a highly efficient and versatile piece of equipment designed for complex sewing tasks. This machine is ideal for producing items such as quilts, embroidery, and decorative stitching, where multiple needles are required. The Multi Needle Sewing Machine features a powerful motor and a precise feeding mechanism, ensuring smooth and consistent operation. It comes with multiple needle positions and adjustable stitch length and width, allowing for customization based on the specific needs of the project. The machine is equipped with an automatic needle threader and thread cutter, making the sewing process more efficient and reducing downtime. The adjustable presser foot pressure and feed dog system ensure optimal fabric control and prevent puckering or stretching. The Multi Needle Sewing Machine also includes a large work area with an extension table, providing ample space for larger projects. Its intuitive LCD screen and easy-to-navigate menu make it user-friendly and suitable for both beginners and experienced sewers. With its durable construction and high-quality components, the Multi Needle Sewing Machine is built to withstand the demands of industrial use and deliver exceptional results every time.",
    category: "Industrial Sewing",
    image: "/multi-needle-sewing-machine-250x250.jpg",
    price: 399999,
    stock: 3,
  },
  {
    id: 6,
    title: "PFAFF Sewing Machine",
    description: "The PFAFF Sewing Machine is a premium industrial sewing machine known for its precision, reliability, and versatility. This machine is designed to handle a wide range of sewing tasks, from basic stitching to complex embroidery. It features a powerful motor that ensures smooth and consistent operation, even when working with heavy fabrics. The PFAFF Sewing Machine comes with a variety of stitch options, including straight stitch, zigzag, and decorative stitches, allowing for creative freedom and customization. The machine is equipped with an automatic needle threader and thread cutter, making the sewing process more efficient and reducing downtime. The adjustable presser foot pressure and feed dog system ensure optimal fabric control and prevent puckering or stretching. The PFAFF Sewing Machine also includes a large work area with an extension table, providing ample space for larger projects. Its intuitive LCD screen and easy-to-navigate menu make it user-friendly and suitable for both beginners and experienced sewers. With its durable construction and high-quality components, the PFAFF Sewing Machine is built to withstand the demands of industrial use and deliver exceptional results every time.",
    category: "Industrial Sewing",
    image: "/pfaff-sewing-machine-250x250.jpg",
    price: 449999,
    stock: 2,
  },
  {
    id: 7,
    title: "Piece End Joining Machine",
    description: "The Piece End Joining Machine is a specialized industrial sewing machine designed for joining the ends of fabric pieces together. This machine is ideal for producing items such as curtains, bedspreads, and other large textile products. The Piece End Joining Machine features a high-speed motor and a precise feeding mechanism, ensuring smooth and consistent operation. It is equipped with an adjustable tension control system, allowing for customization based on the type and thickness of the fabric being used. The machine also includes an automatic cutting system, which trims the fabric to the desired length, reducing manual labor and increasing efficiency. The Piece End Joining Machine is built with a sturdy frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Piece End Joining Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any sewing operation.",
    category: "Industrial Sewing",
    image: "/piece-end-joining-machine-250x250.jpg",
    price: 299999,
    stock: 4,
  },
  {
    id: 8,
    title: "Ultrasonic Sewing Machine",
    description: "The Ultrasonic Sewing Machine is a cutting-edge piece of equipment that uses ultrasonic technology to bond fabrics together without the need for thread or needles. This machine is ideal for producing items such as medical garments, filters, and other products that require a seamless finish. The Ultrasonic Sewing Machine features a high-frequency ultrasonic generator and a precise feeding mechanism, ensuring smooth and consistent operation. It is equipped with an adjustable power control system, allowing for customization based on the type and thickness of the fabric being used. The machine also includes an automatic cutting system, which trims the fabric to the desired length, reducing manual labor and increasing efficiency. The Ultrasonic Sewing Machine is built with a sturdy frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Ultrasonic Sewing Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any sewing operation.",
    category: "Industrial Sewing",
    image: "/ultrasonic-sewing-machine-250x250.jpg",
    price: 599999,
    stock: 1,
  },
  {
    id: 9,
    title: "Blade Grinding Machine",
    description: "The Blade Grinding Machine is an essential piece of equipment for sharpening and maintaining the cutting edges of various tools and blades. This machine is commonly used in industries such as woodworking, metalworking, and manufacturing, where sharp and precise cutting tools are crucial for optimal performance. The Blade Grinding Machine features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate sharpening. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the blade being sharpened. The machine also includes a cooling system to prevent overheating and maintain the integrity of the blade. The Blade Grinding Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are sharpening saw blades, drill bits, or other cutting tools, the Blade Grinding Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any tool maintenance operation.",
    category: "Grinding",
    image: "/blade-grinding-machine-250x250.jpg",
    price: 399999,
    stock: 3,
  },
  {
    id: 10,
    title: "Crankshaft Grinder",
    description: "The Crankshaft Grinder is a specialized piece of equipment designed for grinding and polishing the crankshafts of internal combustion engines. This machine is essential for maintaining the performance and longevity of engines in various industries, including automotive, marine, and aerospace. The Crankshaft Grinder features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the crankshaft being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the crankshaft. The Crankshaft Grinder is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small engines or large industrial engines, the Crankshaft Grinder delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any engine maintenance operation.",
    category: "Grinding",
    image: "/crankshaft-grinder-250x250.jpg",
    price: 449999,
    stock: 2,
  },
  {
    id: 11,
    title: "Cutter Grinder",
    description: "The Cutter Grinder is a versatile and powerful piece of equipment designed for sharpening and maintaining the cutting edges of various tools and cutters. This machine is commonly used in industries such as woodworking, metalworking, and manufacturing, where sharp and precise cutting tools are crucial for optimal performance. The Cutter Grinder features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate sharpening. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the cutter being sharpened. The machine also includes a cooling system to prevent overheating and maintain the integrity of the cutter. The Cutter Grinder is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are sharpening saw blades, drill bits, or other cutting tools, the Cutter Grinder delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any tool maintenance operation.",
    category: "Grinding",
    image: "/cutter-grinder-250x250.jpg",
    price: 299999,
    stock: 4,
  },
  {
    id: 12,
    title: "Cylindrical Grinding Machine",
    description: "The Cylindrical Grinding Machine is a specialized piece of equipment designed for grinding and polishing cylindrical surfaces. This machine is commonly used in industries such as automotive, aerospace, and manufacturing, where precision and accuracy are crucial for optimal performance. The Cylindrical Grinding Machine features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the cylindrical surface being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the surface. The Cylindrical Grinding Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small components or large industrial parts, the Cylindrical Grinding Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any grinding operation.",
    category: "Grinding",
    image: "/cylindrical-grinding-machine-250x250.jpg",
    price: 599999,
    stock: 3,
  },
  {
    id: 13,
    title: "Duplex Grinder Machine",
    description: "The Duplex Grinder Machine is a highly efficient and versatile piece of equipment designed for grinding and polishing flat surfaces. This machine is commonly used in industries such as automotive, aerospace, and manufacturing, where precision and accuracy are crucial for optimal performance. The Duplex Grinder Machine features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the flat surface being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the surface. The Duplex Grinder Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small components or large industrial parts, the Duplex Grinder Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any grinding operation.",
    category: "Grinding",
    image: "/duplex-grinder-machine-250x250.jpg",
    price: 499999,
    stock: 2,
  },
  {
    id: 14,
    title: "Face Grinding Machine",
    description: "The Face Grinding Machine is a specialized piece of equipment designed for grinding and polishing the faces of various tools and components. This machine is commonly used in industries such as automotive, aerospace, and manufacturing, where precision and accuracy are crucial for optimal performance. The Face Grinding Machine features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the face being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the surface. The Face Grinding Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small components or large industrial parts, the Face Grinding Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any grinding operation.",
    category: "Grinding",
    image: "/face-grinding-machine-250x250.jpg",
    price: 349999,
    stock: 4,
  },
  {
    id: 15,
    title: "Needle Grinding Machine",
    description: "The Needle Grinding Machine is a specialized piece of equipment designed for grinding and polishing the needles of various tools and components. This machine is commonly used in industries such as automotive, aerospace, and manufacturing, where precision and accuracy are crucial for optimal performance. The Needle Grinding Machine features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the needle being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the surface. The Needle Grinding Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small components or large industrial parts, the Needle Grinding Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any grinding operation.",
    category: "Grinding",
    image: "/needle-grinding-machine-250x250.jpg",
    price: 279999,
    stock: 3,
  },
  {
    id: 16,
    title: "Profile Grinders",
    description: "The Profile Grinders are specialized pieces of equipment designed for grinding and polishing the profiles of various tools and components. This machine is commonly used in industries such as woodworking, metalworking, and manufacturing, where precision and accuracy are crucial for optimal performance. The Profile Grinders feature a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. They are equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the profile being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the surface. The Profile Grinders are built with a robust frame and high-quality components, ensuring durability and long-term reliability. Their user-friendly interface and easy-to-follow instructions make them accessible for operators of all skill levels. Whether you are working on small components or large industrial parts, the Profile Grinders deliver exceptional performance and quality. Their compact design allows them to fit seamlessly into any workshop or production line, making them a valuable addition to any grinding operation.",
    category: "Grinding",
    image: "/profile-grinders-250x250.jpg",
    price: 399999,
    stock: 2,
  },
  {
    id: 17,
    title: "Slideway Grinding Machine",
    description: "The Slideway Grinding Machine is a specialized piece of equipment designed for grinding and polishing the slideways of various machine tools. This machine is commonly used in industries such as automotive, aerospace, and manufacturing, where precision and accuracy are crucial for optimal performance. The Slideway Grinding Machine features a powerful motor and a high-precision grinding wheel, ensuring consistent and accurate grinding. It is equipped with adjustable grinding angles and speeds, allowing for customization based on the specific requirements of the slideway being worked on. The machine also includes a cooling system to prevent overheating and maintain the integrity of the surface. The Slideway Grinding Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small components or large industrial parts, the Slideway Grinding Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any workshop or production line, making it a valuable addition to any grinding operation.",
    category: "Grinding",
    image: "/slideway-grinding-machine-250x250.jpg",
    price: 649999,
    stock: 1,
  },
  {
    id: 18,
    title: "Liquid Packaging Machine",
    description: "The Liquid Packaging Machine is a highly efficient and versatile piece of equipment designed for packaging liquid products. This machine is ideal for industries such as food and beverage, pharmaceuticals, and cosmetics, where precise and hygienic packaging is crucial. The Liquid Packaging Machine features a powerful motor and a precise filling mechanism, ensuring consistent and accurate filling of liquid products. It is equipped with adjustable filling volumes and speeds, allowing for customization based on the specific requirements of the product being packaged. The machine also includes a sealing system to ensure the integrity and safety of the packaged product. The Liquid Packaging Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Liquid Packaging Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any packaging operation.",
    category: "Packaging",
    image: "/liquid-packaging-machinery-250x250.jpg",
    price: 899999,
    stock: 3,
  },
  {
    id: 19,
    title: "Pouch Packaging Machine",
    description: "The Pouch Packaging Machine is a highly efficient and versatile piece of equipment designed for packaging products in pouches. This machine is ideal for industries such as food and beverage, pharmaceuticals, and cosmetics, where precise and hygienic packaging is crucial. The Pouch Packaging Machine features a powerful motor and a precise filling mechanism, ensuring consistent and accurate filling of products. It is equipped with adjustable filling volumes and speeds, allowing for customization based on the specific requirements of the product being packaged. The machine also includes a sealing system to ensure the integrity and safety of the packaged product. The Pouch Packaging Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Pouch Packaging Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any packaging operation.",
    category: "Packaging",
    image: "/pouch-packaging-machines-250x250.jpg",
    price: 699999,
    stock: 4,
  },
  {
    id: 20,
    title: "Powder Packaging Machine",
    description: "The Powder Packaging Machine is a highly efficient and versatile piece of equipment designed for packaging powder products. This machine is ideal for industries such as food and beverage, pharmaceuticals, and cosmetics, where precise and hygienic packaging is crucial. The Powder Packaging Machine features a powerful motor and a precise filling mechanism, ensuring consistent and accurate filling of powder products. It is equipped with adjustable filling volumes and speeds, allowing for customization based on the specific requirements of the product being packaged. The machine also includes a sealing system to ensure the integrity and safety of the packaged product. The Powder Packaging Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Powder Packaging Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any packaging operation.",
    category: "Packaging",
    image: "/powder-packaging-machine-250x250.jpg",
    price: 799999,
    stock: 2,
  },
  {
    id: 21,
    title: "Snacks Packaging Machine",
    description: "The Snacks Packaging Machine is a highly efficient and versatile piece of equipment designed for packaging snack products. This machine is ideal for industries such as food and beverage, where precise and hygienic packaging is crucial. The Snacks Packaging Machine features a powerful motor and a precise filling mechanism, ensuring consistent and accurate filling of snack products. It is equipped with adjustable filling volumes and speeds, allowing for customization based on the specific requirements of the product being packaged. The machine also includes a sealing system to ensure the integrity and safety of the packaged product. The Snacks Packaging Machine is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Snacks Packaging Machine delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any packaging operation.",
    category: "Packaging",
    image: "/snacks-packaging-machine-250x250.jpg",
    price: 599999,
    stock: 5,
  },
  {
    id: 22,
    title: "Rice Flour Mill",
    description: "The Rice Flour Mill is a highly efficient and versatile piece of equipment designed for milling rice into flour. This machine is ideal for industries such as food processing, where precise and hygienic milling is crucial. The Rice Flour Mill features a powerful motor and a precise milling mechanism, ensuring consistent and accurate milling of rice. It is equipped with adjustable milling settings, allowing for customization based on the specific requirements of the product being milled. The machine also includes a cooling system to prevent overheating and maintain the integrity of the flour. The Rice Flour Mill is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Rice Flour Mill delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any milling operation.",
    category: "Food Processing",
    image: "/rice-flour-mill-250x250.jpg",
    price: 399999,
    stock: 3,
  },
  {
    id: 23,
    title: "Solar Atta Chakki",
    description: "The Solar Atta Chakki is a highly efficient and eco-friendly piece of equipment designed for milling wheat into flour using solar power. This machine is ideal for industries such as food processing, where precise and hygienic milling is crucial. The Solar Atta Chakki features a powerful motor and a precise milling mechanism, ensuring consistent and accurate milling of wheat. It is equipped with adjustable milling settings, allowing for customization based on the specific requirements of the product being milled. The machine also includes a cooling system to prevent overheating and maintain the integrity of the flour. The Solar Atta Chakki is built with a robust frame and high-quality components, ensuring durability and long-term reliability. Its user-friendly interface and easy-to-follow instructions make it accessible for operators of all skill levels. Whether you are working on small-scale production or large-scale manufacturing, the Solar Atta Chakki delivers exceptional performance and quality. Its compact design allows it to fit seamlessly into any production line, making it a valuable addition to any milling operation.",
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
