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
    localStorage.removeItem('user');
    window.location.href = '/Login';
  };

  const username = localStorage.getItem('user');

  return (
    <div className={`fixed w-full flex h-20 items-center text-white ${active ? 'bg-white text-black shadow-lg' : 'bg-blue-600'} justify-between transition duration-300 fixed z-[9999] px-10`}>
      <a href={`/`} className="font-bold text-xl">
        STORE
      </a>
      {/* Hidden on small screens, visible on medium and larger screens */}
      <div className="font-bold hidden md:block">{username?.toUpperCase()}</div>
      <div className="flex">
        <div className="flex hover:scale-105 items-center px-5 relative">
          {/* Bag handle with notification */}
          <div className="absolute bottom-0 right-2 bg-red-500 rounded-full text-white px-[8px] md:px-[5px] py-[1px]">
            <div className="text-center">{amount}</div>
          </div>
          <IoBagHandleSharp className="text-3xl hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>
        {/* Logout button */}
        <Button className="ml-2 bg-red-600 font-semibold" onClick={handleLogout}>
          <IoIosLogOut className="3xl" />
        </Button>
      </div>
    </div>
  );
};

export default NavbarMe;
