import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const DELETE_USER = "mypage/DELETE_USER";
const GET_USER_INFO = "mypage/GET_USER_INFO";
const SET_USER_INFO = "mypage/SET_USER_INFO";

export const deleteUser = createAction(DELETE_USER, () => undefined);
export const getUserInfo = createAction(GET_USER_INFO);

const API = `http://bp.ssaverytime.kr:8080`;

// 회원정보 얻음
function* getUserInfoFnc() {
  const objString = localStorage.getItem("login-token");
  const obj = JSON.parse(objString);

  try {
    const get = yield call(() => {
      return axios({
        method: "get",
        url: `${API}/api/auth/user`,
        headers: {
          Authorization: `Bearer ${obj.value}`,
        },
      });
    });

    if (get.status === 200) {
      yield put({ type: SET_USER_INFO, payload: get.data });
    }
  } catch (e) {}
}

// 회원 탈퇴
function* deleteUserFnc() {
  const objString = localStorage.getItem("login-token");
  const obj = JSON.parse(objString);

  try {
    const DELETE = yield call(() => {
      return axios({
        method: "delete",
        url: `${API}/api/auth/user`,
        headers: {
          Authorization: `Bearer ${obj.value}`,
        },
      });
    });
  } catch (e) {}
}

export function* mypageSaga() {
  yield takeLatest(GET_USER_INFO, getUserInfoFnc);
  yield takeLatest(DELETE_USER, deleteUserFnc);
}

const initialState = {};

const mypageReducer = handleActions(
  {
    [SET_USER_INFO]: (state, action) => {
      return { ...state, userInfo: action.payload };
    },
  },
  initialState
);

export default mypageReducer;
