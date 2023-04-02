import { Link } from 'react-router-dom';
import './navbar-style.sass';
import Arrow from '../Icons/Arrow';

type LinkType = {
  title: string,
  to?: string
}

type NavbarProps = {
  link: LinkType[]
}

const Navbar: React.FC<NavbarProps> = ({ link }) => {
  const linkMobile = link[link.length - 2].to;
  

  return (
    <nav className="navbar">
      <div className="container">
          {
            linkMobile &&
            <div className="navbar__mobile">
                <Link to={linkMobile} className="navbar__mobile-link">
                  <Arrow />
                </Link>
                Назад
            </div>
          }
        
        <ul className="navbar__list">
          {
            link.map((el: LinkType) => 
              <li className="navbar__item" key={el.title}>
                {
                  el.to
                    ? <Link to={el.to}>{el.title}</Link>
                    : <span>{el.title}</span>
                }
              </li>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar