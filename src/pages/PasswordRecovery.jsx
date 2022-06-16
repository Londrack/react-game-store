import React from 'react'
import Buttons from '../components/Buttons';
import {CircularIcon} from '../components/CircularIcon';
import CenterLayout from '../containers/CenterLayout';
import EmailIcon from '../assets/icons/email.svg';

export default function PasswordRecovery() {
  return (
    <CenterLayout
      title="Email has been sent!"
      subtitle="Please check your inbox for instructions on how to reset the password"
    >
          <CircularIcon>
            <img className='w-3_5' src={EmailIcon} alt="Email" />
          </CircularIcon>
          <Buttons
            tag="button"
            name="Login"
            buttonType="primary"
          />
          <p className="font-sm text-center mt-5">Didn't receive the email? <a href="./" alt="Resend">Resend</a></p>
    </CenterLayout>
  )
}
