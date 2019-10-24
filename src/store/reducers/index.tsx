import {
    UPDATE_MAP_CARDS,
} from './../actions';


export default (store: any, action: { type: string; payload?: any },): object => {
    switch(action.type) {
        case UPDATE_MAP_CARDS:
            return {
                ...store,
                ...action.payload,
            };
        
        default: 
            return { 
                ...store,
            };
    };
};