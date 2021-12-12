import { useState, useEffect } from 'react';
import { VoicesHeader } from 'VoicesHeader';
import { Voice } from 'Voice';
import { VoiceModel, HttpService, HttpResponse } from 'shared';
import { useTranslation } from 'react-i18next';
import './Voices.scss';

function Voices() {
    const [ voicesData, setVoicesData ] = useState<VoiceModel[]>([]);
    const [ resultVoices, setResultVoices ] = useState<VoiceModel[]>([]); //voices after sorting, searching and filtering
    const [ sortDesc, setSortDesc ] = useState<boolean>(false);
    const [ searchText, setSearchText ] = useState<string>('');
    const [ favouriteVoices, setFavouriteVoices ] = useState<VoiceModel[]>([]);
    const [ selectedVoiceId, setSelectedVoiceId ] = useState<string>();
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

    useEffect(() => {
        let voices = voicesData.map(a => Object.assign({}, a));
        //resultVoices contain voices list after applying searh and sort....
        voices.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        if (sortDesc) {
            voices.reverse();
        }
        if (searchText) {
            voices = voices.filter((voice: VoiceModel) => voice.name.toLowerCase().includes(searchText.toLowerCase())); //pass to lowercase, so the search will work with uppercase/lowercase
        }
        setResultVoices(voices);
    }, [voicesData, sortDesc, searchText]);

    useEffect(() => {
        //search and sort are applied to favourite voices too
        setFavouriteVoices(resultVoices.filter((voice: VoiceModel) => voice.favourite));
    }, [resultVoices]);

    const handleSetSelected = (voiceId: string ) => {
        setSelectedVoiceId(voiceId);
    }

    const handleSetSortDesc = (status: boolean ) => {
        setSortDesc(status);
    }

    const handleRandomSelect = () => {
        const notSelectedVoices = resultVoices.filter((voice: VoiceModel) => voice.id !== selectedVoiceId);
        if(!notSelectedVoices.length) {
            return;
        }
        const randomVoice = notSelectedVoices[Math.floor(Math.random()*notSelectedVoices.length)];
        setSelectedVoiceId(randomVoice.id);
    }

    const handleSetSearchText = (e: React.FormEvent<HTMLInputElement> ) => {
        const text = e.currentTarget.value;
        setSearchText(text ? text.trim(): ''); //removes start/end spaces with trim
    }

    const handleSetFavourite = (voiceId: string) => {
        setVoicesData((previousVoicesData: any) => {
            //the correct type for previousVoicesData is VoiceModel[], but there is some issues with VSCode typescript plugin... I used any for this reason.
            const currentVoice = (previousVoicesData as VoiceModel[]).find((voice: VoiceModel) => voice.id === voiceId);
            return previousVoicesData ? [
                ...previousVoicesData.filter((voice: VoiceModel) => voiceId !==voice.id),
                {
                    ...currentVoice,
                    favourite: !currentVoice?.favourite
                }
            ] : [];
        });
    }

    return (
        <div className="voices container-lg">
            <VoicesHeader 
                sortDesc={sortDesc} 
                onSetSortDesc={handleSetSortDesc}
                onSetSearchText={handleSetSearchText}
                onRandomSelect={handleRandomSelect} />
            {/* Each section should be a new component <VoiceList> to not repeat the code, I started to do it but discarted the changes then I saw the size of this refactor... */}
            <section >
                <h1 className="voices__title">{t('voices.favourites')}</h1>
                <ul className="voices__list">
                    { favouriteVoices && favouriteVoices.map((voice: VoiceModel) => {
                        return <li className="voices__item" key={`favourite_${voice?.id}`}>
                            <Voice 
                                voice={voice} 
                                selected={voice?.id === selectedVoiceId} 
                                onSetSelected={handleSetSelected} 
                                onSetFavourite={handleSetFavourite} />
                            </li>
                    })
                    }
                </ul>
            </section>
            <section>
                <h1 className="voices__title">{t('voices.title')}</h1>
                <ul className="voices__list">
                    { resultVoices && resultVoices.map((voice: VoiceModel) => {
                        return <li className="voices__item" key={voice?.id}>
                            <Voice 
                                voice={voice} 
                                selected={voice?.id === selectedVoiceId} 
                                onSetSelected={handleSetSelected} 
                                onSetFavourite={handleSetFavourite} />
                            </li>
                    })
                    }
                </ul>
            </section>
        </div>
      );
}

export default Voices;
