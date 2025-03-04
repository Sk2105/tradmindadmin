'use client';

import TopAppBar from '@/app/components/ui/TopAppBar';
import useProductStore from '@/lib/store/product';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;

}

export default function ProductPage() {


  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
      useProductStore.getState().getProductById(Number(id))
        .then((p) => {
          if (p) {
            setProduct(p);
          }
        })
        .catch((error) => console.log(error))
    }
  }, [id])

  if (!id) {
    return <div>Product ID is missing</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopAppBar
        title={product?.title || 'Product'}
        onBackPress={() => window.history.back()}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Image
              src={product?.image || ""}
              alt={product?.title || ""}
              width={500}
              height={500}
              className="w-full h-96 object-fill"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product?.title}</h1>
            <p className="text-sm text-gray-500">{product?.description}</p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-orange-600">
                  ₹{product?.price?.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Ex. Factory Price</p>

              </div>

              <div className="flex items-center justify-between">
                
                <button className='bg-blue-600'>
                  Edit
                </button>

              </div>


            </div>
          </div>
        </div>
        <div className='flex justify-start flex-col p-2'>
          <p className='text-gray-600 text-sm'>Description</p>
          <p> Lorem ipsum dolor sit, amet consectetur a
            dipisicing elit. Ex vero alias hic, quas doloribus ducimus s
            ed voluptatum eligendi, repellendus, ipsam nostrum neque nam quisquam quia i
            ste magni vitae voluptatem? Libero, accusantium? Autem vero voluptatem molestiae rep
            ellendus amet obcaecati earum deserunt, distinctio porro. Eligendi doloremque temporibus
            nisi sapiente dicta inventore corrupti soluta alias aliquid sit assumenda nobis reprehenderit,
            possimus necessitatibus illo vel iste ullam laborum ipsa. Id ducimus itaque voluptas quod eveniet.
            Expedita odio consectetur neque deleniti accusantium maxime molestiae itaque praesentium reprehenderit v
            oluptatibus, tenetur doloribus, adipisci perspiciatis veritatis aliquam a blanditiis natus fug
            iat unde, iste non earum mollitia reiciendis quasi.Lorem ipsum dolor sit amet consect
            etur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            eveniet iste excepturi iure ullam optio quod, hic corporis facere, soluta eligend
            i voluptate delectus accusamus, odio eum tempore id cupiditate! Voluptatem? Laborum
            obcaecati exercitationem quisquam delectus necessitatibus quas suscipit quasi veritati
            s eaque, at harum autem totam similique facilis cumque praesentium numquam adipisci perspiciatis.</p>
        </div>
      </div>
    </div>
  );
}
