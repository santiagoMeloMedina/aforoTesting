
import { createStore, StoreCreator } from 'redux';
import reducer from './reducer';

export const configureStore = (): StoreCreator => {
    return createStore(reducer);
}