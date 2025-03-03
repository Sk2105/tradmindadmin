import CustomButton from "../ui/CustomButton";
import FeaturedProducts from "../ui/ProductCard";

export default function Products() {
    return (
        <div className="h-full w-full flex flex-col p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Products</h1>
                <CustomButton label="Create New" onClick={() => alert('Button clicked!')} />
            </div>
          <FeaturedProducts />
        </div>
    );
}
