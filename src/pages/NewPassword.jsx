import React from 'react';
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import CenterLayout from '../containers/CenterLayout';

export default function NewPassword() {

  return (
    <CenterLayout
      title="Create a new password"
      subtitle="Enter a new password for your account"
    >
          <Input
            id="password"
            name="Password"
            placeholder="******"
            type="password"
          />
          <Input
            id="re-password"
            name="Re-enter Password"
            placeholder="******"
            type="password"
          />
          <Buttons
            tag="button"
            name="Confirm"
            buttonType="primary"
          />
    </CenterLayout>
  );
}
