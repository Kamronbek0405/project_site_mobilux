// 'use client';

import Link from 'next/link';
import React from 'react';
import { Sidebar } from '@/components/sidebar/sidebar';

const AboutLayout  =  ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col'>
        <section>
        </section>
        <Sidebar/>
      </div>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
}

export default AboutLayout;
