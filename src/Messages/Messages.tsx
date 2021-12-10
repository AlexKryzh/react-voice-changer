import { useAppStore } from 'store';
import { IMessage } from 'shared';
import { useTranslation } from 'react-i18next';
import './Messages.scss';

function Loading() {
    const [appState] = useAppStore();
    const { t } = useTranslation();
    const alertTypes: string[] = ['primary', 'warning', 'danger'];

    return (
        <aside className="messages">
        { appState.messages.length > 0 && <ul className="p-0 m-0">
                { appState.messages.map((message: IMessage) => {
                    return <div 
                        key={message.id} 
                        className={`animate__animated animate__bounceInRight shadow-sm alert alert-${alertTypes[message.type]}`} 
                        role="alert">
                    {t(message.text)}
                  </div>
                })}
            </ul>
        }
        </aside>
    );
}

export default Loading;
