"use client"
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Korzinka } from '@/icon/kornika';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface phonesType {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}


export const PhoneCard: React.FC<phonesType> = ({ img, title, rame, color, brand, price, id }) => {
  const router = useRouter()
  const basketItem = () => {
    router.push(`/phone/${id}`)
  }
  return (
    <div className="w-[300px] border-2 h-[420px] flex flex-col justify-between items-center py-4 rounded-xl shadow-lg shadow-gray-400 hover:shadow-md ">
      <Image src={img} alt='img' width={200} height={200} />
      <h3 className=" px-8">{title}</h3>

      <div className='flex gap-3 ml-3'>
        <p > {rame}</p>
        <p> {color}</p>
        <p > {brand}</p>
      </div>
      <p className="text-lg font-medium py-2 ml-5"> {price} so'm</p>
      <Button startIcon={<Korzinka />} onClick={basketItem} variant={"basket"} className='' >Savatchaga</Button>

    </div>
  );
};