"use client";
import React, { useEffect, useState } from 'react';
import { productTypes } from '@/service/types/types';
import { GetNotebook } from '@/service/query/get-notebook';
import { NotebookDetail } from '@/components/notebook-deteil/notebook-deteil';

interface NotebookProps {
  params: { notebookdeteil_id: string };
}

const NotebookDeteil: React.FC<NotebookProps> = ({ params }) => {
  const { notebookdeteil_id } = params; 
  const [notebookData, setNotebookData] = useState<productTypes | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notebooks = await GetNotebook();
        const foundNotebook = notebooks.find((item) => item.id === Number(notebookdeteil_id));
        
        if (!foundNotebook) {
          throw new Error('Notebook topilmadi');
        }
        
        setNotebookData(foundNotebook);
      } catch (error) {
        console.error('Fetch error:', error);
        setNotebookData(null);
      }
    };

    fetchData();
  }, [notebookdeteil_id]);

  if (!notebookData) {
    return (
      <div className='flex flex-col items-center justify-center h-[100vh] w-[100%] bg-gray-100'>
        <h1 className='mt-4 text-2xl font-bold text-gray-700'>Notebook topilmadi</h1>
        <p className='text-gray-500 mt-2'>Bizning ma'lumotlar bazasida bunday notebook mavjud emas.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center justify-center  w-[100%] bg-gray-50'>
      <NotebookDetail key={notebookData.id} {...notebookData}/>
    </div>
  );
};

export default NotebookDeteil;
