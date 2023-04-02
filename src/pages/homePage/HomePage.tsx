import { Link } from 'react-router-dom';
import './homePage-style.sass';

const HomePage = () => {
  return (
    <div className='container'>
      <h2 className="home__title">Главная</h2>
      <ul className="home__list">
        <li className="home__item">
          <Link to='../hotel-market/admin'>Админ</Link>
        </li>
        <li className="home__item">
          <Link to='../hotel-market/catalog'>Каталог товаров</Link>
        </li>
        <li className="home__item">          
          <Link to='../hotel-market/basket'>Корзина</Link>
        </li>
      </ul>
    </div>
  )
};

export default HomePage;
