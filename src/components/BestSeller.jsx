import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title'; // Import Title component
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]); // Corrected useState and variable name

  useEffect(() => {
    // Filter and set the top 10 best-selling products (assuming products have a 'bestSeller' property)
    const bestProducts = products.filter((item) => item.bestseller); 
    setBestSeller(bestProducts.slice(0, 5)); // Updated to correctly set bestSeller
   
  }, [products]); // Added products as a dependency

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'} /> {/* Corrected Title component */}
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veniam assumenda aut qui! Dolorum delectus aliquam incidunt. Voluptatibus sequi sit blanditiis quis temporibus officia iusto, odit unde perferendis veritatis magnam.
        </p>
      </div>

      {/* Display best-selling products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSeller.map((item, index) => (
            <ProductItem 
              key={index} // Use a unique key based on the item's _id
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
