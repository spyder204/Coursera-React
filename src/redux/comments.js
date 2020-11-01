const { COMMENTS } = require("../shared/comments");

export const commentsReducer = (state = COMMENTS, action) => {

    switch(action.type){
        //we have not created any actions yet, so just gonna go with default for now
        default:
            return state;
    }

}