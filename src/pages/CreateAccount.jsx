import React from 'react';
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import CenterLayout from '../containers/CenterLayout';

export default function CreateAccount() {
  return (
    <CenterLayout
      title="My account"
      img={false}
    >
          <Input
            id="name" name="Your name"
            placeholder="Your Name"
          />
          <Input
            id="email" name="Email address"
            placeholder="your@email.com" type="email"
          />
          <Input
            id="password" name="Password"
            placeholder="******" type="password"
          />
          <Buttons
            tag="button" name="Create Account"
            buttonType="primary"
          />
    </CenterLayout>
  )
}
