import { Download } from "./Icons/Icons";
import Logo from "./Icons/Logo";
import Button from "./button/Button";
import InputSearch from "./input-search/InputSearch";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__row footer__about">
            <Logo />
            <p>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
            <div className="footer__email">
              <span>Подпишись на скидки и акции</span>
              <InputSearch />
            </div>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">Меню сайта:</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">О компании</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Доставка и оплата</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Возврат</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">Категории:</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">Бытовая химия</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Косметика и гигиена</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Товары для дома</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Товары для детей и мам</a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">Посуда</a>
              </li>
            </ul>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">Скачать прайс-лист:</h3>
            <Button text="Прайс-лист">
              <Download className="price-icon"/>
            </Button>
            <span className="footer__social-media-title">Связь в мессенджерах:</span>
            <ul className="footer__social-media-list">
              <li className="footer__social-media-item">
                <a href="#" className="footer__social-media-link whatsapp"></a>
              </li>
              <li className="footer__social-media-item">
                <a href="#" className="footer__social-media-link telegram"></a>
              </li>
            </ul>
          </div>
          <div className="footer__row">
            <h3 className="footer__title">Контакты:</h3>
            <div className="footer__call-text">
              <a className="footer__call-phone" href="tel:+77774900091">+7(777) 490-00-91</a>
              <span className="footer__call-time">время работы: 9:00-20:00</span>
              <a className="footer__order-call" href="#">Заказать звонок</a>
            </div>
            <div className="footer__email">
              <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</a>
              <span>На связи в любое время</span>
            </div>
            <ul className="footer__cards-list">
              <li className="footer__cards-item">
                <a href="#" className="footer__cards-link visa"></a>
              </li>
              <li className="footer__cards-item">
                <a href="#" className="footer__cards-link master-card"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
