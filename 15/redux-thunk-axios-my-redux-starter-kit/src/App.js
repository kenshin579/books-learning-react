import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as counterActions from './modules/counter';
import * as postActions from './modules/post';

class App extends Component {
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        //이전 number와 현재 number가 다르면 요청을 시작함
        if (this.props.number !== prevProps.number) {
            this.loadData();
        }
    };

    loadData = () => {
        const {PostActions, number} = this.props;
        //1.기본 문법
        PostActions.getPost(number).then(
            (response) => {
                console.log('loadData:response', response);
            }
        ).catch(
            (error) => {
                console.log('loadData:error', error);
            }
        );
        //2.async/await : ES7 문법 - 동작잘 안됨
        // try {
        //     const response = await PostActions.getPost(number);
        //     console.log(response);
        // } catch (e) {
        //     console.log(e);
        // }
    };

    render() {
        const {CounterActions, number, post, error, loading} = this.props;

        return (
            <div>
                <h1>{number}</h1>
                {
                    (() => {
                        if (loading)
                            return (<h2>로딩중...</h2>);
                        if (error)
                            return (<h2>오류 발생!</h2>);
                        return (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    })()
                }
                <button onClick={CounterActions.increment}>+</button>
                <button onClick={CounterActions.decrement}>-</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        number: state.counter,
        post: state.post.data,
        loading: state.post.pending,
        error: state.post.error
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch),
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(App);
