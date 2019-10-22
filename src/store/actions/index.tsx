const ACTION:string = 'ACTION';
 

function action(data: any) {
    return {
        type: ACTION,
        payload: data,
    };
};


export {
    action,
    ACTION,
};