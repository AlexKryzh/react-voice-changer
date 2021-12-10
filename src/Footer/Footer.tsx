import { useCallback } from 'react';
import { langs, ILang, MessageType } from 'shared';
import { StoreHelper } from 'store';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

function Footer() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const { t, i18n } = useTranslation();
    const setLanguage = useCallback(
        (lang: string) => {
            if (lang === i18n.resolvedLanguage) {
                return;
            }
            const storeHelper = new StoreHelper();
            storeHelper.pushMessage({id: '', type: MessageType.info, text: 'page.langChanged'});
            return i18n.changeLanguage(lang);
        }, [i18n]);

      return (
        <footer className="footer py-3">
            <div className="container-lg">
                <div className="row">
                    <div className="footer__langs col-12 col-sm-6">
                        <ul className="ps-0 mb-sm-0">
                        { langs && Object.keys(langs as ILang)
                            .map((lang: string) => 
                                <li className="d-block d-sm-inline-block" key={lang}>
                                    <button 
                                        className={`footer__lang btn btn-link ${i18n.resolvedLanguage === lang ? 'is-active' : ''}`} 
                                        onClick={() => setLanguage(lang)}
                                        aria-label={lang}
                                        title={t('page.changeLang')}
                                        >{langs[lang].nativeName}</button>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="footer__year col-12 col-sm-6 text-start text-sm-end">
                        &copy; {currentYear}
                    </div>
                </div>
            </div>
        </footer>
      );
}

export default Footer;
