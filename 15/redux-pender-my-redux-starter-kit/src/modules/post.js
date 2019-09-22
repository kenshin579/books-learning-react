import {handleActions, createAction} from 'redux-actions';
import { pender, applyPenders } from 'redux-pender';
import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';

/*
redux-pender의 액션 구조는 Flux standard action을 따르기 때문에 createAction으로 액션을 만들 수 있음.
두 번째로 들어가는 파라미터는 Promise를 반환하는 함수
 */
export const getPost = createAction(GET_POST, getPostAPI);

const initialState = {
    //요청이 진행중인, 오류가 발생했는지 여부는 더 이상 직접 관리할 필요가 없음.
    //penderReducer가 담당함
    // pending: false,
    // error: false,
    data: {
        title: '',
        body: ''
    }
};
const reducer = handleActions({
    // 다른 일반 액션들을 관리..
}, initialState);

export default applyPenders(reducer, [
    {
        type: GET_POST,
        onSuccess: (state, action) => {
            // 성공했을 때 해야 할 작업이 따로 없으면 이 함수 또한 생략해도 됩니다.
            const { title, body } = action.payload.data;
            return {
                data: {
                    title,
                    body
                }
            }
        },
        onCancel: (state, action) => {
            return {
                data: {
                    title: '취소됨',
                    body: '취소됨'
                }
            }
        }

    },
    /*
      다른 pender 액션들
      { type: GET_SOMETHING, onSuccess: (state, action) => ... },
      { type: GET_SOMETHING, onSuccess: (state, action) => ... }
    */
]);
