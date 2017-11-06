import {
  INITIAL_ID,
  ADD_SCORE,
  UPDATE_ID,
  MINUS_ID,
  RECENT_SCORE,
  MINUS_SCORE
} from './type';

export const initialId = () => {
  return{
    type:INITIAL_ID
  };
}

export const addScore = score => {
  return{
    type:ADD_SCORE,
    payload:score
  }
}

export const updateId = () => {
  return {
    type:UPDATE_ID
  }
}

export const minusId = () => {
  return {
    type:MINUS_ID
  }
}

export const recentScore = score => {
  return {
    type:RECENT_SCORE,
    payload:score
  }
}

export const minusScore = score => {
  return {
    type:MINUS_SCORE,
    payload:score
  }
}
