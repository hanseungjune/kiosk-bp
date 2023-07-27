import { RESET_QR_DATA, SET_QR_CODE } from "../actions/qrdataAction";

const initialState = {
  data: "",
};

export default function qrCodeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QR_CODE:
      return {
        ...state,
        data: action.Payload,
      };
    case RESET_QR_DATA:
      return {
        ...state,
        data: initialState.data,
      };
    default:
      return state;
  }
}
