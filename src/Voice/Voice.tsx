import './Voice.scss';
//import { useTranslation } from 'react-i18next';
import { VoiceModel } from 'shared';

type VoiceProps = {
    voice: VoiceModel;
}

function Voice(props: VoiceProps) {
    const { voice } = props;
    //const { t } = useTranslation();

    return (
        <button className="voice btn btn-link" title={voice?.name} data-cy="voice">
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
