import { Link } from 'react-router-dom';
import './navbar-style.sass';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to='./admin'>Админ</Link>
          </li>
          <li className="navbar__item">
            <Link to='./catalog'>Косметика и гигиена</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar