import * as ActionTypes from './ActionTypes';

//func to create an action object which is a JS object
export const addComment  = (dishId, rating, author, comment)=>({
    //every action object must contain a type
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
    }  
});
// this ActionType will now be sent to the store