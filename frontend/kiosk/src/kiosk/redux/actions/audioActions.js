export const SET_AUDIO = 'SET_AUDIO';
export const SET_PLAYING = 'SET_PLAYING';

export const setAudio = (audio) => ({
  type: SET_AUDIO,
  payload: audio
});

export const setPlaying = (playing) => ({
  type: SET_PLAYING,
  payload: playing
});