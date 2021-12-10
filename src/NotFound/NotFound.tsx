import { useTranslation } from 'react-i18next';
import './NotFound.scss';

function NotFound() {
    const { t } = useTranslation();
    return (
        <section className="not-found">
            <h1 className="not-found__title">{t('page.notFound')}</h1>
        </section>
    );
}

export default NotFound;
