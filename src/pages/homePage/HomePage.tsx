import { Link } from 'react-router-dom';
import './homePage-style.sass';

const HomePage = () => {
  return (
    <div className='container'>
      <h2 className="home__title" data-testid="home-page">Главная</h2>
      <ul className="home__list">
        <li className="home__item">
          <Link to='../hotel-market/admin' data-testid="admin-link">Админ</Link>
        </li>
        <li className="home__item">
          <Link to='../hotel-market/catalog' data-testid="catalog-link">Каталог товаров</Link>
        </li>
        <li className="home__item">          
          <Link to='../hotel-market/basket' data-testid="basket-link">Корзина</Link>
        </li>
      </ul>
    </div>
  )
};

export default HomePage;
