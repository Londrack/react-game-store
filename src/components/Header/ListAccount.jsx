import { useSelector } from "react-redux";

export default function ListAccount() {
  const loginState = useSelector(state => state.loginState);
  return (
    <ul>
        {
          !loginState
                ? <li className='text-blue-100'><a href="/">Log in</a></li>
                : <>
                    <li><a href="/">My orders</a></li>
                    <li><a href="/">My account</a></li>
                    <hr className='border-grey-300'/>
                    <li className='font-thin'>your@email.com</li>
                    <li className='text-blue-100'><a href="/">Sing out</a></li>
                  </>
        }
    </ul>
  )
}
