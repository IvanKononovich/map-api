import { createStore } from 'redux';

import reducer from './reducers';


const initStore: any = {
    title: 'Map API',
};


export default createStore(reducer, initStore );