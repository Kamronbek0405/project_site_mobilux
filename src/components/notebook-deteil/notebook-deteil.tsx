"use client";
import React, { useState } from 'react';
import { phonesType } from '@/service/query/get-phones';
import { Star } from '@/icon/star/star';
import { Button } from '../ui/button';
import { Flag } from '@/icon/flag';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/zustand-redux/store';
import { Tavar } from '@/icon/tavar';
import Image from 'next/image';
import { Arrow } from '@/icon/arrow';

export const NotebookDetail: React.FC<phonesType> = ({ img, title, rame, color, brand, price, id }) => {
  const [quantity, setQuantity] = useState(1); 
  const router = useRouter();
  const { addItem } = useCartStore(); 

  const incrementQuantity = () => setQuantity(prev => prev + 1); 
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 0)); 


  const numericPrice = parseFloat(price.replace(/[^\d]/g, '')); 
  const discountPercentage = 20;
  const discountedPrice = numericPrice * (1 - discountPercentage / 100); 

 
  const formatPrice = (price: number) => price.toLocaleString('uz-UZ') + ' so’m';

  const handleAddToCart = () => {
    const item = { img, title, rame, color, brand, price: numericPrice, id, quantity };
    addItem(item); 
    router.push("/product");
  };

  return (
    <div className='flex items-center justify-center px-10  '>
      <div>
      <Link className='flex items-center gap-2 mb-5'  href={"/"}> <Arrow/>Ortga</Link>
        <Image src={img} alt='img' width={800} height={800}  />
      </div>
      <div className='  px-40 relative'>
        <div className='absolute px-10 py-5 bg-black text-white flex flex-col right-[-40px] rounded-l-lg top-20 '>
            <span className='flex items-center gap-2 mb-2'> <Tavar/> {quantity} Mahsulot</span>
            <span className='px-5 py-2 bg-white rounded-lg text-center text-lg font-medium text-black'>{quantity}</span>
        </div>
        <div className='py-5'>
          <h2 className='text-4xl font-bold text-gray-900'>{title}</h2>
          <div className='flex gap-3'>
            <p className='text-4xl font-bold text-gray-900'>{brand}</p>
            <p className='text-4xl font-bold text-gray-900'>{rame}</p>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <Star /> 
          <span className='line-through text-gray-500'>{formatPrice(numericPrice)}</span> 
          <span className='px-3 bg-red-500 text-white py-2 rounded-xl'>-{discountPercentage}%</span>
        </div>
        <p className='text-green-500 text-4xl font-medium py-5'>{formatPrice(discountedPrice)}</p>
        <div className='flex items-center gap-2'>
        <Button variant={"default"} className='bg-black px-20' onClick={handleAddToCart} size={'lg'}>
          Savatchaga
        </Button>
         <div className='flex items-center gap-5 ml-5 border-2 border-black px-5 py-1 rounded-xl'>
         <Button onClick={decrementQuantity} variant={"outline"} className='hover:text-white hover:bg-black'>-</Button>
          <span className='text-lg'>{quantity}</span>
          <Button onClick={incrementQuantity} variant={"outline"} className=' hover:text-white hover:bg-black' >+</Button>
         </div>
        </div>
        <div className='flex gap-8 items-center py-8'>
          <h1>Rangi:</h1>
          <p className='text-black px-7 py-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-0 rounded-lg'>{color}</p>
          <p className='text-red-600 px-7 py-2 border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-0'>Red</p>
          <p className='text-blue-600 px-7 py-2 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-0'>Blue</p>
          <p className='text-green-600 px-7 py-2 border-2 border-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-0'>Green</p>
        </div>
        <div className='flex items-center gap-5 max-w-[800px] rounded-xl h-[64px] bg-green-200 py-8 px-5'>
          <span className='w-[42px] h-[42px] bg-white rounded-full flex items-center justify-center'><Flag /></span>
          <p className='font-medium'>O’zbekiston bo’ylab yetkazib berish: <span className='font-normal ml-2'>14 ish kuni</span></p>
        </div>
        <div className='py-7'>
          <strong>Описание</strong>
          <p className='max-w-[600px] py-5'>Смартфон Apple iPhone 13 Pro Max 512 GB Graphite Apple iPhone 13 Pro Max оснащен передовыми технологиями, значительно расширяющими функциональные возможности девайса. На тыльной стороне девайса расположен инновационный</p>
        </div>
      </div>
    </div>
  );
};
