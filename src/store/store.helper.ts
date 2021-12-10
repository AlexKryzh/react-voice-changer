import { AppStoreType, AppStore } from './store';
import { IMessage } from '../shared';

export interface IStoreHelper {
    setIsLoading(status: boolean): void;
    pushMessage(message: IMessage): void;
}

export class StoreHelper implements IStoreHelper {

    private removeOldestMessage(): void {
        AppStore.dispatch({
            type: AppStoreType.REMOVE_OLDEST_MESSAGE,
            payload: null
        });
    }

    public setIsLoading(status: boolean): void {
        AppStore.dispatch({
            type: AppStoreType.SET_ISLOADING,
            payload: status
        });
    }

    public pushMessage(message: IMessage): void {
        setTimeout(() => {
            this.removeOldestMessage();
        }, 5000);

        AppStore.dispatch({
            type: AppStoreType.PUSH_MESSAGE,
            payload: message
        });
    }
}
