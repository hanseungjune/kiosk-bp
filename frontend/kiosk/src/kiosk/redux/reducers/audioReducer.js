import { SET_AUDIO, SET_PLAYING } from "../actions/audioActions";

// reducer
const initialState = {
  audio: null,
  playing: false,
};

export const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUDIO:
      return { ...state, audio: action.payload };
    case SET_PLAYING:
      return { ...state, playing: action.payload };
    default:
      return state;
  }
};
