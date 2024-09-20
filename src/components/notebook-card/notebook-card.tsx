'use client';
import React from 'react'
import { productTypes } from '@/service/types/types'
import { Button } from '../ui/button'
import { Korzinka } from '@/icon/kornika'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const NotebookCard:React.FC<productTypes> = ({img, title, brand, color, price, id }) => {
  const router = useRouter()
  const basketList = () =>{
    router.push(`/notebook/${id}`)
  }
  return ( 
    <div className='w-[300px] h-[450px] shadow-lg shadow-gray-400  border-2 rounded-xl flex flex-col justify-between items-center hover:shadow-md '>
       <div className='px-5'>
       <Image src={img} alt='img' width={230} height={230}  />
        <h1>{title}</h1>
        <p>{brand}</p>
        <p>{color}</p>
        <p className='text-lg font-medium'>{price} so'm</p>
       </div>
        <Button onClick={basketList} startIcon={<Korzinka/>} variant={"basket"} size={"lg"} className='mb-2 '>Savatchaga</Button>
    </div>
  )
}