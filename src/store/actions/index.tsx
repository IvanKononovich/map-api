const UPDATE_MAP_CARDS:string = 'UPDATE_MAP_CARDS';
 

function updateMapCards(data: any) {
    return {
        type: UPDATE_MAP_CARDS,
        payload: data,
    };
};


export {
    updateMapCards,
    UPDATE_MAP_CARDS,
};