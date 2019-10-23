import { createStore } from 'redux';

import reducer from './reducers';
import mapCards from './map-cards.json';
import mapCoordinates from './map-coordinates.json';


const initStore: any = {
    mapCards,
    mapCoordinates,
};


export default createStore(reducer, initStore);