import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer.js';

const configureStore = (initialState) => {

    return createStore(rootReducer, initialState)


};

export default configureStore;