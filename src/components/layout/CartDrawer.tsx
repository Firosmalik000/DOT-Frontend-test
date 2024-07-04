import React from 'react';
import CardCart from '../fragment/CardCart';
import { IoClose } from 'react-icons/io5';

const CartDrawer = () => {
  return (
    <div className="fixed top-0 right-0 h-screen w-[600px] bg-gray-800 text-white py-4 px-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Cart</h2>
        <IoClose className="text-xl my-auto" />
      </div>
      <div className="border-y h-[500px] p-5 my-4  overflow-y-auto">
        <CardCart />
      </div>
      <div className="text-xl">totoal</div>
    </div>
  );
};

export default CartDrawer;
