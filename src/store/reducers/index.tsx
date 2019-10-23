import {
    ACTION,
} from './../actions';


export default (store: any, action: { type: string; payload?: any },): object => {
    switch(action.type) {
        case ACTION:
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