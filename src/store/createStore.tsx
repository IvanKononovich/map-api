import { createStore } from 'redux';

import reducer from './reducers';
import endpoint from './../api/endpoint.json';
import { 
    updateMapCards 
} from './actions';


const initStore: any = {
    mapEndpoint: endpoint,
};
const store = createStore(reducer, initStore);

function checkChangeJSON(): void {
    const thisStore: { mapEndpoint?: string[] } = store.getState();
    const mapEndpoint = thisStore.mapEndpoint;

    // Отправляеться запрос на сервер,
    // который читает файлы и возвращает
    // их содержимое, после этого пришедшие
    // в json формате данные сравниваються с
    // объектом преобразованым в json из store.
    // Если они не равны, то пришедшие с 
    // сервера данные записываються в store
    
    const req = fetch('http://localhost:9999/endpoint');
    req
    .then((res: any) => res.json())
    .then((res: any) => {
        if (JSON.stringify(mapEndpoint) !== JSON.stringify(res)) {
            store.dispatch(updateMapCards(res));
        };
    })
    .catch((rej) => console.log(rej));

    setTimeout(() => requestAnimationFrame(checkChangeJSON), 3000);
}

requestAnimationFrame(checkChangeJSON)


export default store;