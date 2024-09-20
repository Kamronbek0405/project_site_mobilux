"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

export const SearchItem = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() === '') {
     
      router.push('/');
    } else {
     
      router.push(`/search-panel?query=${encodeURIComponent(newQuery)}`);
    }
  };

  return (
    <div className='  flex items-center justify-between   '>
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Qidirish"
        className='border-none  '
      />
      <div>
      </div>
    </div>
  );
};
