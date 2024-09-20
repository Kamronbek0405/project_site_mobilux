// "use client"
// import React from 'react';
// import { useCartStore } from '@/zustand/store';

// const products = [
//   { id: 1, name: 'Mahsulot 1', price: 100 },
//   { id: 2, name: 'Mahsulot 2', price: 200 },
//   { id: 3, name: 'Mahsulot 3', price: 300 },
// ];

// const ProductList = () => {
//   const addToCart = useCartStore((state) => state.addToCart);

//   return (
//     <div>
//       <h2>Mahsulotlar Ro'yxati</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.price} so'm
//             <button onClick={() => addToCart(product)}>Savatga qo'shish</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
