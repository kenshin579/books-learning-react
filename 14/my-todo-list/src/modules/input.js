import {Map} from 'immutable';
import {createAction, handleActions} from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = Map({
    value: ''
});

export default handleActions({
    [SET_INPUT]: (state, action) => { //todo: 잘 이해 안됨
        return state.set('value', action.payload)
    }
}, initialState);
