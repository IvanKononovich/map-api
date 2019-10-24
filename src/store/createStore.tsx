import { createStore } from 'redux';

import reducer from './reducers';
import mapCards from './map-cards.json';
import mapCoordinates from './map-coordinates.json';
import { 
    updateMapCards 
} from './actions';


interface JSONDataType {
    mapCards?: string[];
    mapCoordinates?: string[];
};
interface listDataType {
    storeData: any;
    fileName: string;
};

const initStore: any = {
    mapCards,
    mapCoordinates,
};
const store = createStore(reducer, initStore);

function checkChangeJSON(): void {
    const thisStore: JSONDataType = store.getState();
    const storeMapCards = thisStore.mapCards;
    const storeMapCoordinates = thisStore.mapCoordinates;

    const listData = [
        {
            storeData: storeMapCards,
            fileName: 'map-cards.json',
        },
        {
            storeData: storeMapCoordinates,
            fileName: 'map-coordinates.json',
        },
    ];

    listData.forEach((item: listDataType) => {
        // Отправляеться запрос на сервер,
        // который читает файлы и возвращает
        // их содержимое, после этого пришедшие
        // в json формате данные сравниваються с
        // объектом преобразованым в json из store.
        // Если они не равны, то пришедшие с 
        // сервера данные записываються в store
        
        const { storeData, fileName } = item;
        const req = fetch(`http://localhost:9999/${fileName}`);

        req
        .then((res: any) => res.json())
        .then((res: any) => {
            if (JSON.stringify(storeData) !== JSON.stringify(res)) {
                store.dispatch(updateMapCards(res));
            };
        });
    });

    setTimeout(() => requestAnimationFrame(checkChangeJSON), 3000);
}

requestAnimationFrame(checkChangeJSON)


export default store;