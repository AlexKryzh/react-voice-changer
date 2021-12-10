import { useState, useEffect } from 'react';
import { Voice } from 'Voice';
import { VoiceModel, HttpService, HttpResponse } from 'shared';
import { useTranslation } from 'react-i18next';
import './Voices.scss';

function Voices() {
    const [ voicesData, setVoicesData ] = useState<VoiceModel[]>();
    const apiUrl = process.env.REACT_APP_API_URL;
    const { t } = useTranslation();

    useEffect(() => {
        const httpService = new HttpService();
        const init = async() => {
            const response: HttpResponse = await httpService.get(`/voices`);
            if (response && response.ok) {
                const responseData: VoiceModel[] = await response.json();
                setVoicesData(responseData);
            }
        }

        init();
    }, [apiUrl]);

    return (
        <section className="voices container-lg">
            <h1>{t('voices.title')}</h1>
            <ul className="voices__list row">
                { voicesData && voicesData.map((voice: VoiceModel) => {
                    return <li className="voices__item col-12 col-sm-6 col-md-4 col-lg-3" key={voice?.id}><Voice voice={voice}/></li>
                })
                }
            </ul>
        </section>
      );
}

export default Voices;
