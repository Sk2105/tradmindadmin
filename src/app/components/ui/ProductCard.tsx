import Image from 'next/image';
import useProductStore from '@/lib/store/product';

const FeaturedProducts = ({ searchTerm }: {
    searchTerm: string
}) => {
    const products = useProductStore((state) => state.products);





    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products.length > 0 ? (
                        products.map((product) => {
                            if (!product.title.toLowerCase().includes(searchTerm.toLowerCase())) return null;
                            else return (
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

                                        <button className='w-full h-10 bg-blue-600 text-white font-semibold rounded-lg mt-4 hover:bg-blue-700'>
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className="text-center col-span-full">No products found</div>
                    )}
                </div>
            </div>
        </section>
    );
};
export default FeaturedProducts;

