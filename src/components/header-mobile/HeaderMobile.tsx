import { BasketIcon, GridAlt, OutlineSearch } from '../Icons/Icons';
import { useNavigate } from "react-router-dom";
import Logo from '../Icons/Logo';
import Button from '../button/Button';
import './headerMobile-style.sass';

type HeaderMobileProps = {
  count: number,
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ count }) => {
  const history = useNavigate();

  return (
    <header className='header-mobile'>
      <div className="header-mobile__row">
        <Button className='header-mobile__btn-menu'>
          <div>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </Button>
        <Logo className='header-mobile__logo'/>
        <div
          className="header-mobile__basket"
          onClick={() => history('./hotel-market/basket', { replace: true })}
        >
          <div className="basket__img">
            <BasketIcon />
            {count > 0 && <span className="basket__count">{count}</span>}
          </div>
        </div>
      </div>
      <div className="header-mobile__row">
        <button className="header-mobile__btn">
          <GridAlt />
          Каталог
        </button>
        <button className="header-mobile__btn">
          <OutlineSearch />
          Поиск
        </button>
      </div>
    </header>
  )
}

export default HeaderMobile