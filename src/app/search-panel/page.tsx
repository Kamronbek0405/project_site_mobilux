"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { GetAll } from '@/service/query/get-all';
import { productTypes } from '@/service/types/types';

const SearchPage = () => {
  const [results, setResults] = useState<productTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log('Fetching data with query:', query);
        const data = await GetAll(''); 

        console.log('Data fetched:', data);

        if (Array.isArray(data)) {
          const filtered = data.filter(item => {
            return (
              item.title &&
              item.title.toLowerCase().includes(query.toLowerCase())
            );
          }) as productTypes[];
          console.log('Filtered results:', filtered);
          setResults(filtered);
        } else {
          console.error('Data is not an array:', data);
          setError('Unexpected data format.');
        }

      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Qidiruvda xatolik yuz berdi.');
      } finally {
        setLoading(false);
      }
    };

    if (query.trim()) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className='w-auto flex items-center justify-center h-auto py-16 px-5'>
      {loading && <p>Yuklanmoqda...</p>}
      {error && <p className='text-red-600 font-medium'>{error}</p>}
      {results.length > 0 ? (
        <ul className='flex flex-wrap gap-6'>
          {results.map((item) => (
            <li key={item.id} className="w-[350px] h-[400px] bg-white px-5 rounded-xl py-5 shadow-lg hover:shadow-md hover:shadow-gray-300 shadow-gray-400 border-2">
              <img src={item.img} alt={item.title} className='w-[230px] h-[230px]' />
              <h1 className='font-medium text-lg'>{item.title}</h1>
              <p>Brand: {item.brand}</p>
              <p>{item.color}</p>
              <p className='font-medium'>{item.price} so'm</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p className='font-medium text-xl'>"{query}" malumot topilmadi!!!</p>
      )}
    </div>
  );
};


const Page = () => (
  <Suspense fallback={<div>Yuklanmoqda...</div>}>
    <SearchPage />
  </Suspense>
);

export default Page;
