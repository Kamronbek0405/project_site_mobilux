"use client";
import React from 'react';
import { Button } from '../ui/button';
import { productTypes } from '@/service/types/types';
import { Korzinka } from '@/icon/kornika';
import Image from 'next/image';

interface CatalogType {
  img: string;
  price: string;
  rame: string;
  title: string;
  id: number;
  quantity: number;
  color: string;  
  brand: string; 
}

export const CatalogCard: React.FC<productTypes & { color: string; brand: string; }> = ({ img, price, rame, title, id, color, brand }) => {
  

  return (
    <div className="w-[330px] h-[400px] flex flex-col items-center justify-between rounded-xl shadow-lg border-2 shadow-gray-400 py-3">
      <Image src={img} alt={title} width={200} height={200} />

      <div className='px-5'>
        <h1 className='py-2 font-bold text-lg'>{title}</h1>
        <h3 className='text-gray-600'>{rame}</h3>
        <span className='text-lg font-medium mt-2'>{price} so'm</span>
      </div>

      <Button startIcon={<Korzinka />} variant={"basket"} size={"lg"} className='w-[200px]' >
        Savatchaga
      </Button>
    </div>
  );
};
