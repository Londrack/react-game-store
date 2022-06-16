import { useState } from 'react';
import './Header.scss';
// import {ListNav} from './ListNav';

import logo from '../../assets/logos/logo_game_store.svg';
import iconMenu from '../../assets/icons/icon_menu.svg';
import shopCartIcon from '../../assets/icons/icon_shopping_cart.svg';
import MenuMobile from './MenuMobile';
import {MenuDesk} from './MenuDesk';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

export default function Header({title}) {
  const cartInfo = useSelector(state => state.cartInfo);
  const loginState = useSelector(state => state.loginState);
  const showHeaderTitle = useSelector(state => state.showHeaderTitle);

  const [showDeskMenu, setShowDeskMenu] = useState(false);

  const onShowMobileMenu = () => {
    const menu = document.getElementById('dropdown-menu-mobile');
    menu.classList.add('active');
  }

  const onShowDeskMenu = () => {
    const menu = document.getElementById('dropdown-menu-desk');
    showDeskMenu
      ? menu.classList.remove('active')
      : menu.classList.add('active');
    setShowDeskMenu(!showDeskMenu);
  }

  const onShowShoppingCart = () => {
    const menu = document.getElementById('shopping-cart-box');
    menu.classList.add('active');
  }

  return (
    <>
      <MenuMobile />
      <nav className="navbar-box w-screen-w max-w-full bg-grey-100 shadow-middle flex-space-between
      py-3 px-5 z-index-3 fixed top-0 left-0">
        <img onClick={onShowMobileMenu} className="menu-icon" src={iconMenu} alt="menu" />
        <div className="navbar-left">
          {(!!!title || showHeaderTitle)
            ? <Link to="/"><img src={logo} alt="Game Store" className="logo" /></Link>
            : <h1>{title}</h1>
          }
          {/* <ListNav /> */}
        </div>
        <div className="navbar-right">
          <ul>
            {
              loginState
                ? <>
                    <li className="user-info">
                      <div onClick={onShowDeskMenu} className='a account'>your@email.com <span>&#x203A;</span></div>
                    </li>
                    {!!cartInfo.length &&
                      <li className="navbar-shopping-cart cursor-pointer" onClick={onShowShoppingCart}>
                        <img src={shopCartIcon} alt="Shopping Cart" />
                        <span className='text-blue-100'>{cartInfo.length}</span>
                      </li>
                    }
                  </>
                : <li className="user-info">
                    <a className='text-blue-200' href='/'>Log in </a>
                  </li>
            }
          </ul>
        </div>
      </nav>
      {loginState && <MenuDesk />}
    </>
  );
}
