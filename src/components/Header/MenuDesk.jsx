import ListAccount from './ListAccount';
import './MenuDesk.scss';

export const MenuDesk = () =>
  <nav id='dropdown-menu-desk' className='bg-grey-200 pt-5 pb-7 px-7 lg-show z-index-2 fixed'>
      <ListAccount />
  </nav>
