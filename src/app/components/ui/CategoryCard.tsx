
import { AiOutlineDelete } from 'react-icons/ai';

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

            <img src={category.image} alt={category.name} className="p-4 object-cover" width={100} height={100} />
            <h3 className="font-semibold text-[16px] mb-2">{category.name}</h3>
            <button className="flex items-center gap-1 bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 mt-2">
                <AiOutlineDelete />
                Delete
            </button>
        </div>
    );
}

export default CategoryCard;