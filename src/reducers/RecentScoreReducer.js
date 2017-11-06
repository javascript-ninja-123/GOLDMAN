import {
  RECENT_SCORE
} from '../actions/type'

export default function(state = 0,action){
  switch(action.type){
    case RECENT_SCORE:
    return action.payload;
    default:
    return 0;
  }
}
