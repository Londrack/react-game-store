import AsideLayout from '../containers/AsideLayout';
import Buttons from './Buttons';
import ListPlatformIcons from './ListPlatformIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addCartProduct, removeCartProduct } from '../actions';

export default function AsideProductDetail() {
  const game = useSelector(state => state.productDetail);
  const cartInfo = useSelector(state => state.cartInfo);
  const dispatch = useDispatch();

  const onAddProductToCart = () => {
    dispatch(addCartProduct(game));
  }

  const onRemoveProductToCart = () => {
    dispatch(removeCartProduct(game));
  }


  if(Object.keys(game).length !== 0){
    const tags = game?.tags?.map(tag => tag.name).join(", ");

    return (
      <AsideLayout id="aside-product-box" img={game.background_image}>
        <ListPlatformIcons format="big" platforms={game.parent_platforms} metascore={game.metacritic} />
          <h2 className="">{game.name}</h2>
          <h3 className="font-thin font-sm mb-4">{game.released}</h3>
          <p className="mb-4">{tags}</p>
          <h3 className="font-extra-bold font-roboto mb-2 font-lg">{`$ ${game.price}`}</h3>
          {(cartInfo.filter(e => e.id === game.id).length > 0)
          ? <span onClick={onRemoveProductToCart}>
              <Buttons tag="button" name="Remove to cart" buttonType="secondary" />
            </span>
          : <span onClick={onAddProductToCart}>
              <Buttons tag="button" name="Add to cart" buttonType="primary" />
            </span>
          }
      </AsideLayout>
    );
  }
  return <AsideLayout id="aside-product-box"></AsideLayout>
}
