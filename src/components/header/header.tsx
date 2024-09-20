import { Logo } from '@/icon/logo';
import React from 'react';
import { Search } from '@/icon/search';
import { Button } from '../ui/button';
import { Turn } from '@/icon/turn';
import { SelectLanguage } from '../ui/select-language';
import { User } from '@/icon/user';
import { SearchItem } from '@/app/search';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='max-w-[1535px] p-5 flex items-center justify-between  shadow-lg shadow-gray-300 flex-wrap  md:gap-5 '>
      <Link href={"/"} className='flex-shrink-0 sm:py-3'>
        <Logo />
      </Link>
      <label className='flex items-center border-green-400 border-2 rounded-lg p-2 w-full max-w-3xl flex-grow   '>
        <div className='flex items-center gap-3 flex-grow'>
          <span className='w-[40px] h-[40px] flex items-center justify-center'>
            <Search />
          </span>
          <div className='flex-grow sm:w-[80px]'>
            <SearchItem />
          </div>
        </div>
        <div className='hidden sm:block'>
          <Button startIcon={<Turn />} variant={'default'} size={'lg'}>
            Filter
          </Button>
        </div>
      </label>
      <div className='hidden sm:block sm:mt-2  '>
        <SelectLanguage className='w-[78px] h-[38px] bg-slate-100 rounded-lg px-1' />
      <Button variant={"secondary"} size={"lg"} endIcon={<User />}>
        Kirish
      </Button>
      </div>
    </div>
  );
};
