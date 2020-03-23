const initialState = {
    number: 1,
    foo: 'bar',
    baz: 'qux'
};


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (diff) => ({
    type: INCREMENT,
    diff: diff

});

const decrement = (diff) => ({
    type: DECREMENT,
    diff: diff
});


function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT :
            return {
                ...state,
                number: state.number + action.diff
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - action.diff
            };
        default:
            return state;
    }
}

//리덕스 스토어 생성
const {createStore} = Redux;
const store = createStore(counter);

//구독
const unsubscribe = store.subscribe(() => {
    console.log("subscribe: ", store.getState());
});

//distpatch로 액션 전달
store.dispatch(increment(1));
store.dispatch(increment(5));
store.dispatch(increment(10));
