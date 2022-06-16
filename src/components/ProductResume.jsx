import { useDispatch } from 'react-redux';
import { removeCartProduct } from '../actions';
import {ImgSquare} from './ImgSquare';

export default function ProductResume({ game, imgWidth }) {
  const dispatch = useDispatch();
  const onRemoveProductToCart = () => {
    dispatch(removeCartProduct(game));
  }

  return (
    <div className="flex-space-between">
      <div className="flex-center gap-4">
        <ImgSquare
          minWidth={imgWidth}
          src={game.img}
        />
        <p className="font-thin">{game.name}</p>
      </div>
      <div className='flex-center gap-4'>
        <p className="font-extra-bold text-grey-400 font-roboto font-md">$ {game.price}</p>
        <span className='cursor-pointer' onClick={onRemoveProductToCart}>X</span>
      </div>
    </div>
  );
}
