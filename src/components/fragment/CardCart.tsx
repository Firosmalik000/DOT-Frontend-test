import { FaTrash } from 'react-icons/fa';
import Button from '../element/Button';
import { decreaseCart, increaseCart, removeCart } from '../../slice/CartSlice';
import { useDispatch } from 'react-redux';

interface CardCartProps {
  item: {
    id: number;
    title: string;
    price: number;
    stock: number;
    image: string;
    qty: number;
  };
}

const CardCart: React.FC<CardCartProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeCart(item.id));
  };

  const handleIncrease = () => {
    dispatch(increaseCart(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseCart(item.id));
  };

  return (
    <div className="w-full rounded-xl border h-[180px] flex p-4">
      <div className="w-1/2 relative">
        <button className="absolute top-1 right-1 py-1 px-2 rounded-lg cursor-pointer bg-red-600 hover:bg-red-300 transition duration-300" onClick={handleRemove}>
          <FaTrash />
        </button>
        <img src={item.image} alt={item.title} className="min-w-[150px] h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <div className="mb-1"> {item.title.substring(0, 30)} ...</div>
        <div className="mb-1">Price : {item.price}</div>
        <div className="flex items-center gap-2">
          <Button onClick={handleIncrease}>+</Button>
          <div>{item.qty}</div>
          <Button onClick={handleDecrease}>-</Button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
