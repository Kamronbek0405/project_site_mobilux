import React from 'react'
import { GetPhones } from '@/service/query/get-phones'
import { PhoneCard } from '@/components/phone-card'
import { Vector } from '@/icon/vector'
import { KorzinkaIcon } from '@/icon/korzinka-icon'

 const Phone = async () => {
    const data = await GetPhones()

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex items-center gap-5 ml-4'>
        <KorzinkaIcon/>
        <h1 className='text-xl font-medium'>Yangi mahsulotlar</h1>
      </div>
        <div className='flex items-center justify-center flex-wrap gap-3 sm:gap-7'>
        {data.slice(0,8).map((item)  => <PhoneCard key={item.id} {...item} />)}
        </div>
    </div>
  )
}
export default Phone
