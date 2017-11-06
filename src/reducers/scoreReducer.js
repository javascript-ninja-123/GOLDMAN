import {
  ADD_SCORE,
  MINUS_SCORE
} from '../actions/type'

const INITIAL_SCORE = 0;

export default function(state = INITIAL_SCORE,action){
  switch(action.type){
    case ADD_SCORE:
    console.log(state + action.payload)
    return state + action.payload;
    case MINUS_SCORE:
    console.log(action.payload)
    return state - action.payload;
    default:
    return state;
  }
}
