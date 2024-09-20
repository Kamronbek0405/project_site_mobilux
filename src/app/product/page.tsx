"use client";
import React, { useEffect, useState } from 'react';
import { GetPhones } from '@/service/query/get-phones'; 
import { useCartStore } from '@/zustand-redux/store';
import Image from 'next/image';

const Product: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 
  const { items, getTotalPrice } = useCartStore(); 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await GetPhones(); 
        setProducts(response); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false); 
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold">Savatchadagi Tavarlar</h2>
      <div className="mt-8 flex flex-col">
        <div className=" flex gap-10">
          {items.map(item => ( 
            <div key={item.id} className="w-[320px] h-[370px] px-12 py-5 gap-2 rounded-xl shadow-lg shadow-gray-400 hover:shadow-md  border-2 ">
              <Image src={item.img} alt='img' width={150} height={150} />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">Rame: {item.rame}</p>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600 ">Brand: {item.brand}</p>
              <p className="text-green-600 font-medium">Narxi: {item.price}  so’m</p>
              <p className="text-gray-600">  {item.quantity} ta tanladingiz</p>
            </div>
          ))}
          
        </div>
          <p className="text-xl font-bold mt-5  ">Umumiy Narx {getTotalPrice()}</p>

        
      </div>
    </div>
  );
};

export default Product;
