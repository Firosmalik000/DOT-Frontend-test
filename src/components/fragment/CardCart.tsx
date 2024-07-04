import { FaTrash } from 'react-icons/fa';
import Button from '../element/Button';

const CardCart = () => {
  return (
    <div className="w-full rounded-xl border h-[180px] flex p-4 ">
      <div className="w-1/2 relative">
        <FaTrash className="absolute top-1 right-1" />
        <img src="" alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <div className="mb-1">Product</div>
        <div className="mb-1">Price</div>
        <div className="mb-1">Stock</div>
        <div className="flex items-center gap-2">
          <Button>+</Button>
          <div>0</div>
          <Button>-</Button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
