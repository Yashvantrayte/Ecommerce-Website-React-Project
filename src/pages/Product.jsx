import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const[size, setSize]= useState('')

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      return null;
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
  <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
    {/* Image Thumbnails */}
    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[15%] w-full">
      {productData.image.map((item, index) => (
        <img 
          onClick={() => setImage(item)} 
          src={item} 
          key={index} 
          className="w-[20%] sm:w-full sm:mb-3 cursor-pointer transition-all hover:opacity-75 flex-shrink-0" 
          alt="Thumbnail"
        />
      ))}
    </div>

    {/* Main Image */}
    <div className="w-full sm:w-[50%]">
      <img className="w-full h-auto rounded-lg shadow-lg" src={image} alt="Main Product" />
    </div>

    {/* Product Name and Rating */}
    <div className="flex flex-col justify-start sm:w-[15%] mt-4">
      <h1 className="font-medium text-2xl">{productData.name}</h1>
      <div className="flex items-center gap-1 mt-2">
        {Array(5).fill(0).map((_, i) => (
          <img src={assets.star_icon} key={i} alt="Star" className="w-4 h-4" />
        ))}
        <p className='pl-2'>{122}</p>
      </div>
      <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
      <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
      <div className='flex flex-col gap-4 my-8'>
        <p>Select Size</p>
        <div className='flex gap-2'>
          {
            productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item) }className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
            ))
          }
        </div>
      </div>
      <button onClick={()=>addToCart(productData._id,size)}className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CARD</button>
      <hr className='mt-8 sm:w-4/5' />
       <div className='text-sm text-gray-500 mt flex flex-col gap-1'>
        <p>100% Original product</p>
        <p> Cash on delivery is available on this product.</p>
        <p> Easy return and exchange policy within  7 days.</p>

       </div>
    </div>
  </div>

  {/**  sdescription and review*/}
  <div className='mt-20'>
    <div className='flex'>
      <b className='border px-5 py-3 text-sm'>Description</b>
      <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
    </div>
    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fuga cum ipsa maiores, sunt nam non. Amet ut id consequatur blanditiis maiores libero ipsa quis, odio deserunt quasi corrupti commodi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora veniam libero perspiciatis dignissimos sit necessitatibus eos corrupti aperiam, dicta facere. Officia ducimus atque ad quaerat consequuntur cupiditate commodi laboriosam!</p>
    </div>
  </div>

  {/** */}
  <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
</div>

  );
};

export default Product;
