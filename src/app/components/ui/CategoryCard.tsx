import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ category, onClick }: {
    category: {
        id: number,
        name: string,
        description?: string,
        image?: string
    },
    onClick: () => void
}) => {
    return (
        <div key={category.id} onClick={onClick} className="bg-white rounded-lg flex justify-center items-center flex-col shadow-md hover:shadow-lg transition-all p-4">
            {category?.image ? <Image src={category?.image || ""} alt={category.name} className="p-4 object-cover" width={100} height={100} /> : <div className="w-20 h-20 bg-gray-200 rounded-full"> no image</div>}
            <h3 className="font-semibold text-[16px] mb-2">{category.name}</h3>

            <Link href={`/category/${category.id}`} className=" px-4 py-2 text-white font-semibold text-xs rounded-2xl bg-blue-600  hover:bg-blue-700 mb-2">{"View"}</Link>
            
        </div>
    );
}

export default CategoryCard;