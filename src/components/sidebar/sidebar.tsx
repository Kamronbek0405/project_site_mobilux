import { GetCatalog } from '@/service/query/get-catalog';
import Link from 'next/link';
import React from 'react';

export const Sidebar = async () => {
  const catalog = await GetCatalog();
  

  return (
    <div className="flex flex-col w-[200px] px-5 gap-5 py-5">
      {catalog?.map((cat) => (
        <Link className='bg-slate-100 w-[150px] h-10 flex items-center px-3' key={cat.name} href={`/catalog/${cat.name}`}>
          {cat.name}
        </Link>
      ))}
    </div>
  );
};
