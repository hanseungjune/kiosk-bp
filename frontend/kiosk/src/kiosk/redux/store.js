// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer'; // 경로는 실제 파일 위치에 따라 달라질 수 있습니다.

const store = createStore(rootReducer);

export default store;