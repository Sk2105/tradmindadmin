import Image from 'next/image';
import Link from 'next/link';



const FeaturedProducts = ({ product }: {
    product: {
        id: number,
        title: string,
        description: string,
        price: number,
        category: string,
        stock: number,
        image: string
    }
}) => {

    return (
        <div key={product.id} className="bg-white w-full rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="relative h-48">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain z-0 p-4"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                <p className="text-blue-600 font-bold">₹{(product.price / 100).toLocaleString()}</p>

                <Link href={`/products/${product.id}`} className='w-full h-10 bg-blue-600 text-white font-semibold rounded-lg mt-4 hover:bg-blue-700 flex items-center justify-center'>View Details</Link>
            </div>
        </div>
    );
};
export default FeaturedProducts;

