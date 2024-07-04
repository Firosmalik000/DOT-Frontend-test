import { IoIosLogOut } from 'react-icons/io';
import Button from '../element/Button';
import { IoBagHandleSharp } from 'react-icons/io5';

const NavbarMe = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = '/Login';
  };

  return (
    <div className="fixed w-full flex bg-blue-600 h-20 items-center text-white justify-between ">
      <div className=" font-bold   px-5">STORE</div>
      <div className=" flex   px-5">
        <Button classname="ml-2 bg-red-600 font-semibold " onClick={handleLogout}>
          <IoIosLogOut />
        </Button>
        <div className="flex items-center px-5">
          <IoBagHandleSharp />
        </div>
        <Button className="bg-black  p-2 text-white rounded px-10 mx-5"></Button>
      </div>
    </div>
  );
};
export default NavbarMe;
