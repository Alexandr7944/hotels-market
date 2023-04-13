/* eslint-disable jsx-a11y/anchor-is-valid */
import './header-style.sass';
import { useNavigate } from "react-router-dom";
import { GridAlt, Download, BasketIcon, Logo } from "../Icons";
import { useAppSelector } from "../../hooks/hook";
import InputSearch from "../input-search/InputSearch";
import HeaderMobile from '../header-mobile/HeaderMobile';
import Button from "../button/Button";

const Header = () => {
  const order = useAppSelector(state => state.orderProducts.list);
  const count = order.reduce((sum, item) => sum + item.count, 0);
  const price = order.reduce((sum, item) => sum + item.price * item.count, 0);
  const history = useNavigate();

  return (
    <header className="header">
      <HeaderMobile count={count}/>
      <div className="container">
        <div className="menu">
          <div className="munu__row menu__contact">
            <div className="menu__location">
              г. Кокчетав, ул. Ж. Ташенова 129Б 
              <span>(Рынок Восточный)</span>
            </div>
            <i className="menu__border"></i>
            <div className="menu__email">
              <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
              <span>На связи в любое время</span>
            </div>
          </div>
          <nav className="munu__row">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">О компании</a>
              </li>
              <i className="menu__border"></i>
              <li className="menu__item">
                <a href="#" className="menu__link">Доставка и оплата</a>
              </li>
              <i className="menu__border"></i>
              <li className="menu__item">
                <a href="#" className="menu__link">Возврат</a>
              </li>
              <i className="menu__border"></i>
              <li className="menu__item">
                <a href="#" className="menu__link">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__row">
        <div className="container">
          <div className="header__flex">
            <div className="header__logo">
              <Logo />
            </div>
            <Button text="Каталог">
              <GridAlt className="catalog"/>
            </Button>
            <InputSearch />
            <div className="header__call">
              <div className="header__call-text">
                <a className="header__call-phone" href="tel:+77774900091">+7(777) 490-00-91</a>
                <span className="header__call-time">время работы: 9:00-20:00</span>
                <a className="header__order-call" href="#">Заказать звонок</a>
              </div>
              <div className="header__call-img">
                <img src={require('../../img/header/call.png')} alt="Звонок" />
              </div>
            </div>
            <Button text="Прайс-лист">
              <Download className="price-icon"/>
            </Button>
            <div
              className="basket"
              data-testid="basket-header-link"
              onClick={() => history('./hotel-market/basket', { replace: true })}
            >
              <div className="basket__img">
                <BasketIcon />
                {count > 0 && <span className="basket__count">{count}</span>}
              </div>
              <div className="basket__price">
                Корзина
                <span>{price.toFixed(2)} ₸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header