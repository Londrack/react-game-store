import React from 'react'
import CenterLayout from '../containers/CenterLayout';
import { useSelector } from "react-redux";
import ResumeBox from '../components/ResumeBox';
import ProductResume from '../components/ProductResume';

export default function MyOrder() {
  const showHeaderTitle = useSelector(state => state.showHeaderTitle);

  return (
    <CenterLayout
      img={false}
      form={false}
      title={showHeaderTitle ? 'My order' : ''}
    >
      <ResumeBox
        left1='04.25.2021'
        left2='6 articles'
        right1='$560,00'
      />
      <div className='flex-column gap-4'>
      {[...Array(4).keys()].map(e =>
           <ProductResume
              name = 'Bike PowerOn'
              price = {`$ 1${e}0,00`}
              src = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              imgWidth = '100px'
            />
        )}
      </div>
    </CenterLayout>
  )
}
