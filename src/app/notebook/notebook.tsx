import React from 'react'
import { GetNotebook } from '@/service/query/get-notebook'
import { NotebookCard } from '@/components/notebook-card/notebook-card'
import { Vector } from '@/icon/vector'

export const Notebook  = async () => {
    const data = await GetNotebook()
  return (
    <div className='w-[100%] mt-10 '>
      <div className='flex gap-3 items-center ' >
        <Vector/>
      <h1 className='text-xl font-medium'>Ommabop mahsulotlar</h1>
      </div>
        <div className='flex items-center justify-center flex-wrap gap-7 mt-10  '>
            {data?.slice(0,8).map((item) => <NotebookCard key={item.id} {...item}/> )}
        </div>
    </div>
  )
}
