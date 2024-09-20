import React from 'react';
import { Button } from '../ui/button';


interface ProductCardProps {
  img: string;
  title: string;
  price: string;
  description: string;
  onAddToCart: () => void;
}

 const ProductCard: React.FC<ProductCardProps> = ({ img, title, price, description, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-lg text-gray-600 mt-1">{price} so'm</p>
      <p className="text-gray-800 mt-2">{description}</p>
      <Button
        onClick={onAddToCart} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Savatchaga qo'shish
      </Button>
    </div>
  );
};
export default ProductCard;
