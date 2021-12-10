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
          </div>
        </nav>
    </header>
  );
}

export default Header;
