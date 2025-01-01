import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets'; // Make sure to have assets or replace with appropriate paths

const Orders = () => {
  // Example order data (You can fetch this from a database or API)
  const orders = [
    {
      id: 'ORD12345',
      date: '2024-12-10',
      total: 199.99,
      items: [
        { name: 'Product 1', quantity: 1, price: 99.99 },
        { name: 'Product 2', quantity: 2, price: 50.00 },
      ],
      status: 'Shipped',
    },
    {
      id: 'ORD12346',
      date: '2024-12-08',
      total: 89.99,
      items: [
        { name: 'Product 3', quantity: 1, price: 89.99 },
      ],
      status: 'Delivered',
    },
  ];

  return (
    <div className="flex flex-col gap-8 pt-8 sm:pt-14 min-h-[80vh]">
      <div className="text-xl sm:text-2xl my-3">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* Orders list */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-300 p-4 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-semibold">Order ID: {order.id}</div>
              <div className="text-sm text-gray-500">Date: {order.date}</div>
            </div>

            <div className="space-y-2">
              <div className="font-semibold">Items:</div>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-lg font-semibold">Total: ${order.total.toFixed(2)}</div>
              <div className={`text-sm font-semibold ${order.status === 'Shipped' ? 'text-yellow-500' : 'text-green-500'}`}>
                {order.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="w-full text-center mt-8">
        <button
          onClick={() => window.history.back()} // Go back to the previous page
          className="bg-black text-white px-8 py-2 text-sm"
        >
          BACK TO SHOPPING
        </button>
      </div>
    </div>
  );
};

export default Orders;
