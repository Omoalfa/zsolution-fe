import AxiosCall from "../../../Utils/axios";
import ErrorHandler from "../../../Utils/error-handler";
import * as types from '../../action-types'

export const signupStart = () => ({
  type: types.SIGNUP_START,
});

export const signupSuccess = (payload) => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signupFail = (payload) => ({
  type: types.SIGNUP_FAIL,
  payload,
});

export const signupCleanup = () => ({
  type: types.SIGNUP_CLEANUP,
});

export const signup = (payload) => async (dispatch) => {
  try {
    dispatch(signupStart());
    const requestObj = {
      path: "users",
      method: "POST",
      data: payload,
    };
    const { data } = await AxiosCall(requestObj);
    dispatch(signupSuccess(data.message));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(signupFail(error));
  }
};
