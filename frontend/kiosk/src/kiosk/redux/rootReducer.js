import { combineReducers } from "redux";
import { audioReducer } from "./reducers/audioReducer";
import qrCodeReducer from "./reducers/qrdataReducer";

export default combineReducers({
  audio: audioReducer,
  qrCode: qrCodeReducer,
});
