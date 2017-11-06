import {
  INITIAL_ID,
  UPDATE_ID,
  MINUS_ID
} from '../actions/type';

const INITIAL_STATE = 1;



export default function(state = INITIAL_STATE,action){
  switch(action.type){
    case INITIAL_ID:
    return INITIAL_STATE;
    case UPDATE_ID:
    return state +1;
    case MINUS_ID:
    return  state  - 1;
    default:
    return state;
  }
}
