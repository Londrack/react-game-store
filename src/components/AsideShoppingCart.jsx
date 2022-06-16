import ProductResume from './ProductResume';
import ResumeBox from './ResumeBox';
import AsideLayout from '../containers/AsideLayout';
import Buttons from './Buttons';
import {  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

export default function AsideShoppingCart() {
  const [heightContainer, setHeightContainer] = useState('');
  const cartInfo = useSelector(state => state.cartInfo);
  const totalPrice = cartInfo.reduce((total, currentObj) => {
    return total += currentObj.price
  }, 0);
  const windowSize = useWindowSize();

  useEffect(() => {
    setHeightContainer(windowSize.height <= 800 ? '66%' : '74%');
  }, [windowSize]);

  return (
    <AsideLayout id="shopping-cart-box" title="Shopping Cart">
      <div className="flex-column gap-4 pr-2" style={{overflowX: 'auto', height: heightContainer}}>
        {cartInfo.map((game) => (
          <ProductResume
            key={`${game.id}-aside-shopping`}
            game={game}
            imgWidth="100px"
          />
        ))}
      </div>
      <ResumeBox left1="Total" right1={`$${totalPrice}`} bgColor="bg-grey-100" />
      <Buttons tag="button" name="Checkout" buttonType="primary" />
    </AsideLayout>
  );
}
