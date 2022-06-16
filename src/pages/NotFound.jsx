import React from 'react';
import Img404 from '../assets/icons/404.svg';

export default function NotFound() {
  return (
    <div className='not-found-box full-size grid-center bg-grey-300'>
        <div>
            <img src={Img404} width={300} title="404" />
            <h1>Content not found</h1>
            <p className='text-yellow-100'><a href='' alt="Back to home">&#xab; Back to home</a></p>
        </div>
    </div>
  )
}
