import React, { useEffect, useState } from 'react';
import './AsideLayout.scss';
import closeBtn from '../../assets/icons/icon_close.png'
import {ImgSquare} from '../../components/ImgSquare';
import {useWindowSize} from '../../hooks/useWindowSize';

export default function AsideLayout({id, title = '', children, img=''}) {
  const [rectangular, setRectangular] = useState(false);
  const onHideAside = () => {
    const menu = document.getElementById(id);
    menu.classList.remove('active');
  };

  const windowSize = useWindowSize();

  useEffect(() => {
    setRectangular(windowSize.height <= 800 ? true : false);
  }, [windowSize]);

  return (
    <div id={id} className='aside-box fixed h-screen-h right-0 top-0 z-index-3
    bg-grey-200'>
      {!!img &&
          <ImgSquare
            semiSquare={true}
            rectangular={rectangular}
            src={img}
          />
      }
      <div className='pt-6 px-7 h-full'>
        {!!title
          ? <h3 className='mb-4'>
              <span onClick={onHideAside} className='font-lg cursor-pointer pr-2'>&lArr;</span>
              {title}
            </h3>
          : <div onClick={onHideAside}
              className="absolute left-3 top-3 z-index-1 bg-white radius-full shadow-middle
              w-8 h-8 flex-center cursor-pointer">
                <img src={closeBtn} alt="Close detail" className='brightness' />
            </div>
        }
        {children}
      </div>
    </div>
  )
}
