const { DISHES } = require("../shared/dishes");

export const dishesReducer = (state = DISHES, action) => {

    switch(action.type){
        //we have not created any actions yet, so just gonna go with default for now
        default:
            return state;
    }

}