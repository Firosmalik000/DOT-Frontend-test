import { useContext, useEffect } from 'react';
import CardCart from '../fragment/CardCart';
import { IoClose } from 'react-icons/io5';
import { SidebarContext } from '../../context/SidebarContext';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../slice/CartSlice';
import { FaTrash } from 'react-icons/fa';

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { isOpen, handleClose }: any = useContext(SidebarContext);
  const cartItems = useSelector((state: any) => state.cart.items);
  const username = localStorage.getItem('user');

  const handleClear = () => {
    dispatch(clearCart());
  };

  const total = cartItems.reduce((acc: number, item: any) => {
    return acc + item.qty * item.price;
  }, 0);
  const amount = cartItems.reduce((acc: number, item: any) => {
    return acc + item.qty;
  }, 0);

  useEffect(() => {
    if (cartItems.length > 0) {
      const sum = cartItems.reduce((acc: number, item: any) => {
        return acc + item.price * item.qty;
      }, 0);
      dispatch({
        type: 'UPDATE_TOTAL',
        payload: {
          total: sum,
        },
      });
      localStorage.setItem(`cart_${username}`, JSON.stringify(cartItems));
    }
  }, [cartItems, dispatch]);

  return (
    <div className={`fixed top-20 right-0 h-screen w-[400px] md:w-[600px] bg-gray-800 text-white py-4 px-10 ${isOpen ? '' : 'translate-x-[600px] transform'} transition duration-300`}>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Cart ({amount})</h2>
        <IoClose className="text-xl my-auto" onClick={() => handleClose()} />
      </div>
      <div className="border-y md:h-[500px] h-[450px] md:p-5 p-2 my-4 overflow-y-auto flex-col flex gap-2">
        {cartItems.length > 0 ? (
          cartItems.map((item: any) => <CardCart key={item?.id} item={item} />)
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p>Item not found</p>
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <div className="text-xl w-2/3">Total: {total.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</div>
        <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white hover:bg-red-300 transition duration-300" onClick={handleClear}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
