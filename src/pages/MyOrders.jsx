import React from 'react'
import CenterLayout from '../containers/CenterLayout';
import { useSelector } from "react-redux";
import ResumeBox from '../components/ResumeBox';

export default function MyOrders() {
  const showHeaderTitle = useSelector(state => state.showHeaderTitle);

  return (
    <CenterLayout
      img={false}
      form={false}
      title={showHeaderTitle ? 'My Orders' : ''}
    >
      <div className='flex-column gap-4'>
      {[...Array(4).keys()].map(e =>
        <ResumeBox
          left1={`0${e+5}.25.2021`}
          left2={`${e+1} articles`}
          right1='$560,00'
          bgColor='bg-grey-100'
          principal = {false}
        />
      )}
      </div>
    </CenterLayout>
  )
}
