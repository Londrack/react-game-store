import './CenterLayout.scss';
import Logo from '../../assets/logos/logo_game_store.svg';
import { useDispatch } from 'react-redux';
import { setActualFormData } from '../../actions';

export default function CenterLayout({
    children, title='', subtitle='', img = true, form = true
  }) {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const dataArray = {};
      for(const pair of data.entries()) {
        dataArray[pair[0]] = pair[1];
      }
      dispatch(setActualFormData(dataArray));
    }

  return (
    <section className="CenterLayout grid-center w-full">
      <div className="form-container">

        { img && <img className="logo mb-8 md-hide" src={Logo} alt="logo" /> }
        { !!title && <h1 className="font-xl mb-8 text-center">{title}</h1>}
        { !!subtitle && <p className="font-lg font-thin text-center mb-1">{subtitle}</p>}

        { form
            ? <form className="flex-column mt-7" onSubmit={handleSubmit}>
                {children}
              </form>
            : <div>{children}</div>
        }

      </div>
    </section>
  );
}
