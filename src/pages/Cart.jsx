import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        {/* Corrected this to be valid JSX */}
        <h1>
          <span>YOUR</span> <span>CART</span>
        </h1>
      </div>

      <div>
        {cartData.map((item, index) => {
          // Fix logic: finding the product by ID properly
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) {
            return null; // Skip rendering if product is not found
          }

          return (
            <div key={index} className="border-b py-4">
              <h2 className="text-xl">{productData.name}</h2>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p>
                Price: {currency}
                {(productData.price * item.quantity).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
