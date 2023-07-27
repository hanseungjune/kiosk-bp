import { SET_QR_CODE } from "../actions/qrdataAction";

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
    default:
      return state;
  }
}
