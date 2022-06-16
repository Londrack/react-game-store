import React from 'react';
import './ImgSquare.scss';

export const ImgSquare = ({minWidth = 'auto', src = '', semiSquare = false, rectangular = false}) =>
  <figure className={`product-img ${rectangular ? 'rectangular' : ''}`} style={{minWidth}}>
      <div className={`${semiSquare ? 'semiSquare' : ''} bg-grey-200`}>
          {!!src && <img
              src={src}
              alt="Producto"
          /> }
      </div>
  </figure>
