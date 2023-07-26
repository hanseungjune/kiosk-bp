// rootReducer.js
import { combineReducers } from 'redux';
import { audioReducer } from './reducers/audioReducer'; // 경로는 실제 파일 위치에 따라 달라질 수 있습니다.

export default combineReducers({
  audio: audioReducer,
});