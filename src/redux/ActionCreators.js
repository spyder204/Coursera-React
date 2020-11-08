import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl'
import { actionTypes, Errors } from 'react-redux-form';

//func to create an action object which is a JS object
export const addComment  = (comment)=>({
    //every action object must contain a type
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});
// this ActionType will now be sent to the store

export const postComment = (dishId, rating, author, comment)=>(dispatch)=> {
//thunk    
    const newComment = {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment,
        date:new Date().toISOString()
    }

    //newComment.date = new Date().toISOString();
    
    return fetch(baseUrl+'comments', {
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response =>{
        if(response.ok){
            return response;// now available to the next then
        }
        else{
            var error = new Error('Error -> '+response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }//abovementioned is how you handle response from a server
    },
    error => { // when you don't hear anything from the server / no response from the server
        var errmess = new Error(error.message)
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>{
        console.log("error in posting comment- "+ error.message);
        alert(error.message)

    })
}    
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response =>{
        if(response.ok){
            return response;// now available to the next then
        }
        else{
            var error = new Error('Error -> '+response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }//abovementioned is how you handle response from a server
    },
    error => { // when you don't hear anything from the server / no response from the server
        var errmess = new Error(error.message)
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error =>{
        dispatch(dishesFailed(error.message))
    })
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments') .then(response =>{
        if(response.ok){
            return response;// now available to the next then
        }
        else{
            var error = new Error('Error -> '+response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }//abovementioned is how you handle response from a server
    },
    error => { // when you don't hear anything from the server / no response from the server
        var errmess = new Error(error.message)
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error =>{
        dispatch(commentsFailed(error.message))
    })
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({ //used by postComments to add comments
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions') .then(response =>{
        if(response.ok){
            return response;// now available to the next then
        }
        else{
            var error = new Error('Error -> '+response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }//abovementioned is how you handle response from a server
    },
    error => { // when you don't hear anything from the server / no response from the server
        var errmess = new Error(error.message)
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error =>{
        dispatch(promosFailed(error.message))
    })
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

//--------leaders 
export const leadersLoading = () =>({
    type:ActionTypes.LEADERS_LOADING
});
export const leadersFailed = (error) =>({
    type:ActionTypes.LEADERS_FAILED,
    payload:error
});
export const addLeaders = (leaders) =>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});

export const fetchLeaders = () => (dispatch) =>{
    
    dispatch(leadersLoading());
    
    return fetch(baseUrl+'leaders')
    .then(response=>{
        if(response.ok)
            return response;
        else{
            var error = new Error('Error -> '+response.status+':'+response.statusText);
            error.response = response;
            throw error;
        }
    }, error =>{
        throw new Error(error.message)
    })
    .then(response=>response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error =>{ 
        dispatch(leadersFailed(error))})    
}


