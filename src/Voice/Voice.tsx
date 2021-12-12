import './Voice.scss';
import { VoiceModel } from 'shared';
import {ReactComponent as HeartIcon} from 'assets/voice-favourite.svg';

type VoiceProps = {
    voice: VoiceModel;
    selected: boolean;
    onSetSelected: Function;
    onSetFavourite: Function;
}

function Voice(props: VoiceProps) {
    const { voice, selected, onSetSelected, onSetFavourite } = props;

    return (
        <span className={`voice d-inline-block ${selected ? 'is-selected' : ''}`}>
            <button className="voice__btn btn btn-link" title={voice?.name} data-cy="voice" onClick={() => onSetSelected(voice.id)}>
                <figure>
                    <span className="voice__image">
                        <img src={`/images/${voice.icon}`} alt={voice.name} />
                    </span>
                    <figcaption className="voice__name text-truncate">{voice.name}</figcaption>
                </figure>
            </button>
            <button className={`voice__favourite btn btn-link ${voice.favourite ? 'is-favourite' : ''}`} title={voice.name} data-cy="voice-favourite" onClick={() => onSetFavourite(voice?.id)}>
                <HeartIcon className="voice__favourite-icon" />
            </button>
        </span>
    );
}

export default Voice;
