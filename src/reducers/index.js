import { combineReducers } from 'redux';
import QuestionReducer from './questionReducer';
import ScoreReducer from './scoreReducer';
import RecentScoreReducer from './RecentScoreReducer';

const rootReducer = combineReducers({
  question:QuestionReducer,
  score:ScoreReducer,
  recent:RecentScoreReducer
});

export default rootReducer;
