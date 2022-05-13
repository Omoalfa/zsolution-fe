import AxiosCall from "../../../Utils/axios";
import ErrorHandler from "../../../Utils/error-handler";
import * as types from '../../action-types'

export const loginStart = () => ({
  type: types.LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: types.LOGIN_FAIL,
  payload,
});

export const loginCleanup = () => ({
  type: types.LOGIN_CLEANUP,
});

export const login = (payload) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const requestObj = {
      path: "user/login",
      method: "POST",
      data: payload,
    };
    const { data } = await AxiosCall(requestObj);
    localStorage.setItem("authToken", data.token);
    dispatch(loginSuccess(data));
    dispatch(setAuth());
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(loginFail(error));
  }
};
