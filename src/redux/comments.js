import * as ActionTypes from './ActionTypes';
const { COMMENTS } = require("../shared/comments");

export const commentsReducer = (state = COMMENTS, action) => {
    switch(action.type){
        
       case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            //comment id =  number of comments in the comments.js file
            comment.date = new Date().toISOString();
            
            //can't modify the current state
            //concat doesn't change the existing array
            //return a new array
            return state.concat(comment);

        default:
            return state;
    }

}