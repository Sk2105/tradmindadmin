'use client';
import EnquiryCard from '@/app/components/ui/EnquiryCard';
import OrderCard from '@/app/components/ui/OrderCard';
import ReviewCard from '@/app/components/ui/ReviewCard';
import TopAppBar from '@/app/components/ui/TopAppBar';
import useEnquiryStore from '@/lib/store/enquiry';
import useOrderStore from '@/lib/store/order';
import useProductStore from '@/lib/store/product';
import useReviewStore from '@/lib/store/reviews';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LuPen } from 'react-icons/lu';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  brand?: string | "Tradminds";
  discountPrice?: number | 15000.0

}

const tabs = [
  "Orders",
  "Enquiries",
  "Reviews"
]

type Order = {
  orderId: number;
  date: string;
  status: string;
  totalAmount: number;
  quantity: number;
  customerAddress: string;
  customerId: number;
  productId: number;
}

type Review = {
  id: number;
  productId: number;
  userId: number;
  rating: number;
  comment: string;
  date: string;
  name: string;
  email: string;

}


type Enquiry = {
  id: number;
  date: string;
  productId: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
export default function ProductPage() {

  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [order, setOrder] = useState<Order[] | undefined>(undefined);
  const [reviews, setReviews] = useState<Review[] | undefined>(undefined);

  const [tab, setTab] = useState(tabs[0]);
  const [enquiries, setEnquiries] = useState<Enquiry[] | undefined>(undefined);






  const handleTabClick = (t: string) => {
    setTab(t);
  }


  useEffect(() => {
    if (id) {
      useProductStore.getState().getProductById(Number(id))
        .then((p) => {
          if (p) {
            setProduct(p);
          }
        })
        .catch((error) => console.log(error))

      useOrderStore.getState().getOrdersByProductId(Number(id))
        .then((o) => {
          if (o) {
            setOrder(o);
          }
        })
        .catch((error) => console.log(error));
      useReviewStore.getState().getReviewsByProductId(Number(id))
        .then((o) => {
          if (o) {
            console.log(o);

            setReviews(o);
          }
        })
        .catch((error) => console.log(error))


      useEnquiryStore.getState().getEnquiriesByProductId(Number(id))
        .then((o) => {
          if (o) {
            setEnquiries(o);
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
              width={300}
              height={300}
              className="w-full h-96 object-fill"
            />
          </div>
          <div>
            <h1 className="text-2xl text-gray-900">{product?.title}</h1>

            <p className='text-[16px] text-gray-500 mt-4'>Brand : {product?.brand || "Tradminds"}</p>
            <p className="text-[10px] text-gray-500 mt-4">Description</p>


            <p className="text-sm text-gray-500">{product?.description}</p>
            <div className="flex items-center justify-between mt-4">


              <div className='flex flex-row items-center '>

                <p className="text-3xl font-bold text-blue-600">₹{product?.discountPrice || ((product?.price ?? 0) / 2.0)}</p>
                <p className="ms-2 text-xl font-bold text-gray-400 line-through">
                  ₹{product?.price.toFixed(2)}
                </p>
              </div>

              <p className="text-sm text-gray-500">Ex. Factory Price</p>

            </div>


            <div className='flex flex-row space-y-4 mt-4'>

              <p className="text-sm text-gray-500">Quantity : </p>
              <p className='text-sm text-gray-600'>{product?.stock}</p>

            </div>

            <div className='grid grid-cols-2 gap-2'>

              <button onClick={
                () => { }
              } className=' text-sm px-2 py-2 hover:bg-green-600/10 border border-green-600 text-green-600 rounded-full justify-center items-center flex focus:outline-none'>
                <LuPen />
                <span className='pl-2'>change image</span>
              </button>

              <Link href={`/edit-product/${product?.id}`} onClick={
                () => { }
              } className=' text-sm px-2 py-2 hover:bg-blue-700 border bg-blue-600 text-white rounded-full justify-center items-center flex focus:outline-none'>
                <LuPen />
                <span className='pl-2'>Edit Product</span>
              </Link>
            </div>
          </div>

        </div>

      </div>


      {
        <div className='w-full ms-4 flex justify-start items-center space-x-4'>
          {
            tabs.map((t) => (
              <button key={t} onClick={() => handleTabClick(t)} className={`px-4 py-2  ${tab === t ? 'border-b-2  border-blue-600 text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}>
                {t}
              </button>
            ))
          }

        </div>
      }

      <div className='w-full p-2'>
        {
          tab === "Orders" && (
            order?.length ? (
              order.map((o) =>
                <OrderCard key={o.orderId} order={o} />)
            ) : <div className="p-2">No Orders</div>
          )
        }

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

          {
            tab === "Enquiries" && (
              enquiries?.length ? (
                enquiries.map((e) =>
                  <EnquiryCard key={e.id} enquiry={e} />
                )
              ) : <div className="p-2">No Enquiries</div>
            )
          }
        </div>



        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>

          {
            tab === "Reviews" && (
              reviews?.length ? (
                reviews.map((r) =>
                  <ReviewCard key={r.id} review={r} />
                )
              ) : <div className="p-2">No Reviews</div>
            )
          }
        </div>


      </div>

    </div>
  );
}
