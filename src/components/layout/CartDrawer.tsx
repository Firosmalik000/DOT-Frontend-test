import { useContext } from 'react';
import CardCart from '../fragment/CardCart';
import { IoClose } from 'react-icons/io5';
import { SidebarContext } from '../../context/SidebarContext';

const CartDrawer = () => {
  const { isOpen, handleClose }: any = useContext(SidebarContext);
  return (
    <div className={`fixed top-20 right-0 h-screen w-[600px] bg-gray-800 text-white py-4 px-10  ${isOpen ? ' ' : 'translate-x-[600px] transform}'} transition duration-300 `}>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Cart</h2>
        <IoClose className="text-xl my-auto" onClick={() => handleClose()} />
      </div>
      <div className="border-y h-[500px] p-5 my-4  overflow-y-auto">
        <CardCart />
      </div>
      <div className="text-xl">Total</div>
    </div>
  );
};

export default CartDrawer;
