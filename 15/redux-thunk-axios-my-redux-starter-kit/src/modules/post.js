import {handleActions, createAction} from 'redux-actions';
import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const getPostPending = createAction(GET_POST_PENDING);
export const getPostSuccess = createAction(GET_POST_SUCCESS);
export const getPostFailure = createAction(GET_POST_FAILURE);

const initialState = {
    pending: false,
    error: false,
    data: {
      title: '',
      body: ''
    }
};

export default handleActions({
  [GET_POST_PENDING]: (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    };
  },
  [GET_POST_SUCCESS]: (state, action) => {
    const { title, body} = action.payload.data;

    return {
      ...state,
      pending: false,
      data : {
        title,
        body
      }
    };
  },
  [GET_POST_FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    };
  },
}, initialState)

export const getPost = (postId) => dispatch => {
    //먼저 요청이 시작했다는 것을 알립니다.
    dispatch(getPostPending());

    //요청을 시작합니다. 여기에서 만든 promise를 return해야 나중에 컴포넌트에서
    //호출할 때 getPost().then(...)을 할 수 있습니다.
    return getPostAPI(postId).then(response => {
        dispatch(getPostSuccess(response));
        return response;
    }).catch(error => {
        dispatch(getPostFailure(error));
        throw(error);
    });
};
