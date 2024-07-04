import { IoIosLogOut } from 'react-icons/io';
import Button from '../element/Button';
import { IoBagHandleSharp } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../context/SidebarContext';

const NavbarMe = () => {
  const [active, setActive] = useState(false);
  const { setIsOpen, isOpen }: any = useContext(SidebarContext);

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
    <div className={`fixed w-full flex  h-20 items-center text-white ${active ? 'bg-white text-black  shadow-lg' : 'bg-blue-600'} justify-between transition duration-300    fixed z-[9999] `}>
      <div className=" font-bold   px-5">STORE</div>
      <div>name</div>
      <div className=" flex   px-5">
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
