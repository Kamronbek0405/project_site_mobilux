import { AppStore } from '@/icon/app-store'
import { GooglePlay } from '@/icon/google-play'
import { Logo } from '@/icon/logo'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex items-start justify-between p-20 mt-16  sm:gap-10 sm:text-white sm:bg-black  md:bg-white md:text-black '>
      <div className='flex flex-col gap-3'>
        <span>
          <Logo />
        </span>
        <p className='hover:text-green-500 hover:scale-105 duration-300'>Mobilux © 2022</p>
        <p className='hover:text-green-500 hover:scale-105 duration-300'>Barcha huquqlar kafolatlangan</p>
        <div className='flex items-center gap-4 mt-5'>
          <GooglePlay />
          <AppStore />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <strong className='text-lg '>Foydali havolalar</strong>
        <ul className='flex flex-col items-start gap-2'>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Bosh sahifa</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Yordam kerakmi?</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Foydalanish shartlari</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Maxfiylik siyosati</a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
        <strong className='text-lg  '>Biz haqimizda</strong>
        <ul className='flex items-start gap-2 flex-col'>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Korxona nomi: Mobilux trade</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="#" className='hover:text-green-500'>Korxona rahbari: HASANBOY TURSUNOV</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="tel:998912345678" className='hover:text-green-500'>Registratsiya raqami: 433-62-00377</a>
          </li>
          <li className='hover:scale-105 transition-transform duration-300'>
            <a href="tel:998912345678" className='hover:text-green-500'>Telefon raqam: 93 000 66-44 97 000 66-44</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
