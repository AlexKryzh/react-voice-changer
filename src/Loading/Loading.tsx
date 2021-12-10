import { useAppStore } from 'store';
import { useTranslation } from 'react-i18next';
import './Loading.scss';

function Loading() {
    const [appState] = useAppStore();
    const { t } = useTranslation();

    return (
        <aside className={`loading ${appState.isLoading ? 'is-active' : ''}`}>
            <div className="loading__animation">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">{t('page.loading')}...</span>
                </div>
            </div>
        </aside>
    );
}

export default Loading;
