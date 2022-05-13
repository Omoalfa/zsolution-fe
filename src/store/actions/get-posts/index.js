import AxiosCall from "../../../Utils/axios";
import ErrorHandler from "../../../Utils/error-handler";
import * as types from '../../action-types'

export const getPostsStart = () => ({
  type: types.GET_POSTS_START,
});

export const getPostsSuccess = (payload) => ({
  type: types.GET_POSTS_SUCCESS,
  payload,
});

export const getPostsFail = (payload) => ({
  type: types.GET_POSTS_FAIL,
  payload,
});

export const getPostsCleanup = () => ({
  type: types.GET_POSTS_CLEANUP,
});

export const getPosts = (payload) => async (dispatch) => {
  try {
    dispatch(getPostsStart());
    const requestObj = {
      path: "post",
      method: "POST",
      data: payload,
    };
    const { data } = await AxiosCall(requestObj);
    dispatch(getPostsSuccess(data.message));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(getPostsFail(error));
  }
};
