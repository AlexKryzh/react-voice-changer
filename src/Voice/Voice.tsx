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
        <div className="voice" data-cy="voice">
            <h1 className="voice__title p-2 text-truncate">{voice?.name}</h1>
        </div>
    );
}

export default Voice;
