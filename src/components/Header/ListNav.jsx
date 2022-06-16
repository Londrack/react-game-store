import { Link } from "react-router-dom"

export const ListNav = () =>{
  const onChangeCategory = (cat) => {
    console.log(cat);
  }

  return (
    <ul>
          <li onClick={() => onChangeCategory('home')}><Link className="active" to="/">Top picks</Link></li>
          <li onClick={() => onChangeCategory('pc')}><Link to="/">PC</Link></li>
          <li onClick={() => onChangeCategory('playstation')}><Link to="/">PlayStation 5</Link></li>
          <li onClick={() => onChangeCategory('xbox')}><Link to="/">Xbox One</Link></li>
          <li onClick={() => onChangeCategory('nintendo')} className='lg-hide-only'><Link to="/">Nintendo Switch</Link></li>
          <li onClick={() => onChangeCategory('all')}><Link to="/">All platforms</Link></li>
      </ul>
    )

}