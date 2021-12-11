import './Voice.scss';
import { VoiceModel } from 'shared';

type VoiceProps = {
    voice: VoiceModel;
    selected: boolean;
    onSelect: Function;
}

function Voice(props: VoiceProps) {
    const { voice, selected, onSelect } = props;

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
