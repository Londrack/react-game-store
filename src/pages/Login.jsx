// import { useRef } from 'react'
import { useSelector } from 'react-redux';
import Buttons from '../components/Buttons';
import Input from '../components/Input';
import CenterLayout from '../containers/CenterLayout';

export default function Login() {
  const loginData = useSelector(state => state.actualFormData);

  const handleClick = () => {
    console.log('state.actualFormData', loginData)
    
  }
  return (
      <CenterLayout>
          <Input
            id="email"
            name="Email address"
            placeholder="your@email.com"
            type="email"
          />
          <Input
            id="password"
            name="Password"
            placeholder="******"
            type="password"
          />
          <span onClick={handleClick}>
            <Buttons
              tag="input"
              name="Confirm"
              buttonType="primary"
            />
          </span>
          <p className='pt-8 pb-2 text-blue-200 text-center'><a className='' href="/" alt="">Forgot my password</a></p>
          <Buttons
            tag="button"
            name="Sing Up"
            buttonType="secondary"
          />
      </CenterLayout>
  )
}
