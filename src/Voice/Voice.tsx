import './Voice.scss';
//import { useTranslation } from 'react-i18next';
import { VoiceModel } from 'shared';
//import { Dispatch, SetStateAction } from 'react';

type VoiceProps = {
    voice: VoiceModel;
    selected: boolean;
    onSelect: any;
    //onSelect: Dispatch<SetStateAction<string | undefined>>
}

function Voice(props: VoiceProps) {
    const { voice, selected, onSelect } = props;
    //const { t } = useTranslation();

    return (
        <button className={`voice btn btn-link ${selected ? 'is-selected' : ''}`} title={voice?.name} data-cy="voice" onClick={() => onSelect(voice?.id)}>
            <figure>
                <span className="voice__image">
                    <img src={`/images/${voice?.icon}`} alt={voice?.name} />
                </span>
                <figcaption className="voice__name text-truncate">{voice?.name}</figcaption>
            </figure>
        </button>
    );
}

export default Voice;
