import { IoIosLogOut } from 'react-icons/io';
import Button from '../element/Button';
import { IoBagHandleSharp } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

import { useSelector } from 'react-redux';

const NavbarMe = () => {
  const [active, setActive] = useState(false);
  const { setIsOpen, isOpen }: any = useContext(SidebarContext);
  const cartItems = useSelector((state: any) => state.cart.items);

  const amount = cartItems.reduce((acc: number, item: any) => {
    return acc + item.qty;
  }, 0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = '/Login';
  };

  return (
    <div className={`fixed w-full flex  h-20 items-center text-white ${active ? 'bg-white text-black  shadow-lg' : 'bg-blue-600'} justify-between transition duration-300    fixed z-[9999]  px-10`}>
      <a href={`/`} className="font-bold ">
        STORE
      </a>
      <div>{amount}</div>
      <div className=" flex   ">
        <div className="flex items-center px-5">
          <IoBagHandleSharp onClick={() => setIsOpen(!isOpen)} />
        </div>

        <Button classname="ml-2 bg-red-600 font-semibold " onClick={handleLogout}>
          <IoIosLogOut />
        </Button>
      </div>
    </div>
  );
};
export default NavbarMe;
