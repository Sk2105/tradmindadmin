import Image from 'next/image';
import useProductStore from '@/lib/store/product';

const FeaturedProducts = () => {
    const products = useProductStore((state) => state.products);
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products ?Object.values(products).map((product) => (
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
                                    <button onClick={
                                        () => {}
                                    } className="mt-3 w-1/2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700">
                                        Delete
                                    </button>
                                    
                                    <button className="mt-3 w-1/2 border-blue-600 border-2 text-blue-600 py-2 rounded-md hover:bg-blue-600/10">
                                        Edit
                                    </button>
                                </div>

                            </div>
                        </div>
                    )): <div>No products found</div>}
                </div>
            </div>
        </section>
    );
};
export default FeaturedProducts;

