import ListAccount from './ListAccount';
// import {ListNav} from './ListNav';
import CloseBtn from '../../assets/icons/icon_close.png';
import './MenuMobile.scss';

export default function MenuMobile() {
  const onCloseMenu = () => {
    const menu = document.getElementById('dropdown-menu-mobile');
    menu.classList.remove('active');
    // setShowMobileMenu(false);
  }

  return (
    <nav id='dropdown-menu-mobile' className='full-size bg-grey-200 py-10 px-8 md-hide z-index-4 fixed'>
        <img onClick={onCloseMenu} className='close-btn' src={CloseBtn} alt="Close" />
        {/* <ListNav /> */}
        <ListAccount />
    </nav>
  )
}
