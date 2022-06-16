import { useDispatch, useSelector } from 'react-redux';
import { setProductDetail, addCartProduct, removeCartProduct } from '../actions';

import {CircularIcon} from './CircularIcon';
import {ImgSquare} from './ImgSquare';
import CartIcon from '../assets/icons/bt_add_to_cart.svg';

export default function ProductCard({game, children}) {
  const cartInfo = useSelector(state => state.cartInfo);
  const dispatch = useDispatch();

  const onHideShoppingAside = () => {
    const menu = document.getElementById('shopping-cart-box');
    menu.classList.remove('active');
  };

  const onShowDetail = () => {
    dispatch(setProductDetail(game));
    onHideShoppingAside();
    const menu = document.getElementById('aside-product-box');
    menu.classList.add('active');
  }

  const onAddProductToCart = () => {
    dispatch(addCartProduct(game));
  }

  const onRemoveProductToCart = () => {
    dispatch(removeCartProduct(game));
  }

  return (
    <div className='mb-2 relative'>
      <div className='cursor-pointer' onClick={onShowDetail}>
        <ImgSquare src={game.background_image} rectangular={true} />
      </div>
      {children}
      <div className="flex-space-between mt-2 gap-1">
        <div>
          <p className="font-extra-bold cursor-pointer hover-underline" onClick={onShowDetail}>{game.name}</p>
          <p className="font-thin font-roboto">{`$ ${game.price}`}</p>
        </div>
        {(cartInfo.filter(e => e.id === game.id).length > 0)
        ? <div className='cursor-pointer' onClick={onRemoveProductToCart}>
            <CircularIcon
              size="45px"
              bgColor="bg-grey-200"
              hoverColor="bg-hover-black-25per"
              marginX="mx-0">
                <span className='font-extra-bold font-md'> X </span>
            </CircularIcon>
          </div>
        : <div className='cursor-pointer' onClick={onAddProductToCart}>
            <CircularIcon
              size="45px"
              bgColor="bg-blue-100"
              hoverColor="bg-hover-blue-200"
              marginX="mx-0">
                <img className="w-3_5" src={CartIcon} alt="Add to cart" />
            </CircularIcon>
          </div>
        }
      </div>
    </div>
  );
}
