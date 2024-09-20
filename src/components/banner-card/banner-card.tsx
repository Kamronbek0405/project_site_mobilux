import React from 'react';

interface BannerCardProps {
    img: string;
}

export const BannerCard: React.FC<BannerCardProps> = ({ img }) => {
  return (
    <div>
        <img src={img} alt="Banner" />
    </div>
  );
}
