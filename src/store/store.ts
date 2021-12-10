import { createStore, ReducerType, useStore } from 'react-hookstore';
import { GenericPayload } from './';
import { IMessage } from '../shared';

const name = 'ROOT/APP';

enum Type {
    SET_ISLOADING = 'ROOT/APP/SET_ISLOADING',
    PUSH_MESSAGE = 'ROOT/APP/PUSH_MESSAGE',
    REMOVE_OLDEST_MESSAGE = 'ROOT/APP/REMOVE_OLDEST_MESSAGE'
}

type Payload = GenericPayload<Type>;

interface State {
    isLoading: boolean;
    messages: IMessage[];
}

const defaultState: State = {
    isLoading: false,
    messages: []
};

const reducers: ReducerType<State, Payload> = function (state: State, { type, payload }) {
    const currentMessages: IMessage[] = state.messages.length > 0 ? [...state.messages] : [];
    switch (type) {
    case Type.SET_ISLOADING:
        return { 
        ...state, 
        isLoading: payload 
        };
    case Type.PUSH_MESSAGE:
        const message = { ...payload, id: Date.now() };
        return { 
            ...state, 
            messages: [...currentMessages, message]
        };
    case Type.REMOVE_OLDEST_MESSAGE:
        currentMessages.shift();
        return { 
            ...state, 
            messages: [...currentMessages]
        };
    default:
        return { ...state };
    }
};

const store = createStore<State>(name, defaultState, reducers);

export const AppStore = store;
export const AppStoreType = Type;
export const useAppStore = () => useStore<State>(store);
