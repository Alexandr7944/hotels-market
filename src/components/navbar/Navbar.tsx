import { Link } from 'react-router-dom';
import './navbar-style.sass';

type LinkType = {
  title: string,
  to?: string
}

type NavbarProps = {
  link: LinkType[]
}

const Navbar: React.FC<NavbarProps> = ({ link }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          {
            link.map((el: LinkType) => 
              <li className="navbar__item">
                {
                  el.to
                    ? <Link to={el.to}>{el.title}</Link>
                    : <span>{el.title}</span>
                }
              </li>
            )
          }
          {/* <li className="navbar__item">
            <Link to='./hotel-market/catalog'>Косметика и гигиена</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar