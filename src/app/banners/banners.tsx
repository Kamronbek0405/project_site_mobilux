import React from 'react';
import { GetBanners } from '@/service/query/get-banners';
import { BannerCard } from '@/components/banner-card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Banners = async () => { 
  const data = await GetBanners();
  return (
    <div className='max-w-[1350px]  '>
      <Carousel className=" max-w-[1350px] p-5">
        <CarouselContent >
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <BannerCard  img={item.img} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
