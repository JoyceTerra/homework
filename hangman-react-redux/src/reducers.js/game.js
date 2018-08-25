export default (state = [], action = {}) => {
    switch(action.type){
        default:
            return state
    }
}

//he reducers should not modify the state. The functions should create copies of objects and arrays before changing them. They should be pure functions.