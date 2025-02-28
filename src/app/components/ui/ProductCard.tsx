import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.values(products).flat().slice(0, 8).map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                            <div className="relative h-48">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                                <p className="text-blue-600 font-bold">₹{(product.price / 100).toLocaleString()}</p>
                                <div className="flex items-center mt-2 gap-1">
                                    <Link href={`product/${product.id}`} className="mt-3 w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                    <button className='text-center w-full h-full' >
                                        View Details
                                    </button>
                                    </Link>
                                    
                                    <button className="mt-3 w-1/2 border-blue-600 border-2 text-blue-600 py-2 rounded-md hover:bg-blue-600/10">
                                        Edit
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FeaturedProducts;

const baseProducts = {
    sewingMachines: [
        {
            id: 1,
            title: "Bar Tacking Machine",
            category: "Industrial Sewing",
            image: "/bar-tacking-machine-250x250.jpg",
            price: 149999,
            stock: 5
        },
        {
            id: 2,
            title: "Bernina Sewing Machine",
            category: "Industrial Sewing",
            image: "/bernina-sewing-machine-250x250.jpg",
            price: 299999,
            stock: 3
        },
        {
            id: 3,
            title: "Bobbin Elastic Machine",
            category: "Industrial Sewing",
            image: "/bobbin-elastic-machine-250x250.jpg",
            price: 189999,
            stock: 4
        },
        {
            id: 4,
            title: "Industrial Sewing Machine",
            category: "Industrial Sewing",
            image: "/industrial-sewing-machine-250x250.jpg",
            price: 249999,
            stock: 2
        },
        {
            id: 5,
            title: "Multi Needle Sewing Machine",
            category: "Industrial Sewing",
            image: "/multi-needle-sewing-machine-250x250.jpg",
            price: 399999,
            stock: 3
        },
        {
            id: 6,
            title: "PFAFF Sewing Machine",
            category: "Industrial Sewing",
            image: "/pfaff-sewing-machine-250x250.jpg",
            price: 449999,
            stock: 2
        },
        {
            id: 7,
            title: "Piece End Joining Machine",
            category: "Industrial Sewing",
            image: "/piece-end-joining-machine-250x250.jpg",
            price: 299999,
            stock: 4
        },
        {
            id: 8,
            title: "Ultrasonic Sewing Machine",
            category: "Industrial Sewing",
            image: "/ultrasonic-sewing-machine-250x250.jpg",
            price: 599999,
            stock: 1
        }
    ],
    grindingMachines: [
        {
            id: 9,
            title: "Blade Grinding Machine",
            category: "Grinding",
            image: "/blade-grinding-machine-250x250.jpg",
            price: 399999,
            stock: 3
        },
        {
            id: 10,
            title: "Crankshaft Grinder",
            category: "Grinding",
            image: "/crankshaft-grinder-250x250.jpg",
            price: 449999,
            stock: 2
        },
        {
            id: 11,
            title: "Cutter Grinder",
            category: "Grinding",
            image: "/cutter-grinder-250x250.jpg",
            price: 299999,
            stock: 4
        },
        {
            id: 12,
            title: "Cylindrical Grinding Machine",
            category: "Grinding",
            image: "/cylindrical-grinding-machine-250x250.jpg",
            price: 599999,
            stock: 3
        },
        {
            id: 13,
            title: "Duplex Grinder Machine",
            category: "Grinding",
            image: "/duplex-grinder-machine-250x250.jpg",
            price: 499999,
            stock: 2
        },
        {
            id: 14,
            title: "Face Grinding Machine",
            category: "Grinding",
            image: "/face-grinding-machine-250x250.jpg",
            price: 349999,
            stock: 4
        },
        {
            id: 15,
            title: "Needle Grinding Machine",
            category: "Grinding",
            image: "/needle-grinding-machine-250x250.jpg",
            price: 279999,
            stock: 3
        },
        {
            id: 16,
            title: "Profile Grinders",
            category: "Grinding",
            image: "/profile-grinders-250x250.jpg",
            price: 399999,
            stock: 2
        },
        {
            id: 17,
            title: "Slideway Grinding Machine",
            category: "Grinding",
            image: "/slideway-grinding-machine-250x250.jpg",
            price: 649999,
            stock: 1
        }
    ],
    packagingMachines: [
        {
            id: 18,
            title: "Liquid Packaging Machine",
            category: "Packaging",
            image: "/liquid-packaging-machinery-250x250.jpg",
            price: 899999,
            stock: 3
        },
        {
            id: 19,
            title: "Pouch Packaging Machine",
            category: "Packaging",
            image: "/pouch-packaging-machines-250x250.jpg",
            price: 699999,
            stock: 4
        },
        {
            id: 20,
            title: "Powder Packaging Machine",
            category: "Packaging",
            image: "/powder-packaging-machine-250x250.jpg",
            price: 799999,
            stock: 2
        },
        {
            id: 21,
            title: "Snacks Packaging Machine",
            category: "Packaging",
            image: "/snacks-packaging-machine-250x250.jpg",
            price: 599999,
            stock: 5
        }
    ],
    foodProcessing: [
        {
            id: 22,
            title: "Rice Flour Mill",
            category: "Food Processing",
            image: "/rice-flour-mill-250x250.jpg",
            price: 399999,
            stock: 3
        },
        {
            id: 23,
            title: "Solar Atta Chakki",
            category: "Food Processing",
            image: "/solar-atta-chakki-250x250.jpg",
            price: 299999,
            stock: 4
        }
    ],
};

const products = {
    ...baseProducts,
    trending: [...baseProducts.sewingMachines.slice(0, 4)],
    newArrivals: [...baseProducts.grindingMachines.slice(0, 4)],
    bestSellers: [...baseProducts.packagingMachines.slice(0, 4)],
    specialOffers: [...baseProducts.foodProcessing.slice(0, 4)]
};  