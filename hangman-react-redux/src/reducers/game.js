
import { MAKE_GUESS } from '../actions/game'
import { NEW_GUESS } from '../actions/game'


export default (state = 'hello', action = {}) => {
  switch(action.type) {
    case NEW_GAME:
    return[...state, action.payload]
    case MAKE_GUESS:
      return [action.payload]
    default:
      return state
  }
}








//he reducers should not modify the state. The functions should create copies of objects and arrays before changing them. They should be pure functions.