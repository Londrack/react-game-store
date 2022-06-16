import React, { useState } from 'react'
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import CenterLayout from '../containers/CenterLayout';
import { useSelector } from "react-redux";


export default function MyAccount() {
  const showHeaderTitle = useSelector(state => state.showHeaderTitle);

  const [edit, setEdit] = useState(false);
  const onChangeEdit = (event) => {
    event.preventDefault();
    setEdit(!edit);
  }

  return (
    <CenterLayout
      img={false}
      title={showHeaderTitle ? 'My account' : ''}
    >
          <Input
            id="name"
            name="Your name"
            placeholder="Your name"
            edit={edit}
            value="Alejandro Mejia"
            type="text"
          />
          <Input
            id="email"
            name="Email address"
            placeholder="your@email.com"
            type="email"
            edit={edit}
            value="my@email.com"
          />
          <Input
            id="password"
            name="Password"
            placeholder="******"
            type="password"
            edit={edit}
            value="******"
          />
          <span onClick={onChangeEdit}>
            <Buttons
              tag="button"
              name={`${!edit ? 'Edit' : 'Save'}`}
              buttonType={`${!edit ? 'secondary' : 'primary'}`}
            />
          </span>
    </CenterLayout>
  )
}
