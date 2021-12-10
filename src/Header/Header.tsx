import './Header.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return (
    <header className="header fixed-top">
        <h1 className="visually-hidden">{t('page.title')}</h1>
        <nav className="header__navbar navbar navbar-expand-md">
          <div className="container-lg">
            <Link to="/" className="header__title">{t('page.title')}</Link>
              <ul className="header__nav navbar-nav" role="menu">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">{t('page.home')}</Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="searchbox">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
          </div>
        </nav>
    </header>
  );
}

export default Header;
