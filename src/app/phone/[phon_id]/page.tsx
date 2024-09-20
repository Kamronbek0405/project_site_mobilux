'use client';

import React, { useEffect, useState } from 'react';
import { GetPhones } from '@/service/query/get-phones';
import { phonesType } from '@/service/query/get-phones';
import { PhoneDetailCard } from '@/components/phone-detail-card';

interface PhoneProps {
  params: { phon_id: string };
}

const BookDetail: React.FC<PhoneProps> = ({ params }) => {
  const [phone, setPhone] = useState<phonesType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phones = await GetPhones();
        const foundPhone = phones.find((item) => item.id === Number(params.phon_id)) || null;
        setPhone(foundPhone);
      } catch (error) {
        console.error("Ma'lumot olishda xatolik:', error");
        setPhone(null);
      }
    };

    fetchData();
  }, [params.phon_id]);

  if (!phone) {
    return (
      <div className='flex flex-col items-center justify-center h-[100vh] w-[100%] bg-gray-100'>
        <h1 className='mt-4 text-2xl font-bold text-gray-700'>Telefon topilmadi</h1>
        <p className='text-gray-500 mt-2'>Bizning ma'lumotlar bazasida bunday telefon mavjud emas.</p>
      </div>
    );
  }

  return (
    <div className='flex items-center h-[100vh] w-[100%]'>
      <PhoneDetailCard {...phone} />
    </div>
  );
};

export default BookDetail;
