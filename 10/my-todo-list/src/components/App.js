import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
    state = {
        input: '', //input 값
        //일정 데이터 초기값
        todos: [
            {id: 0, text: '리엑트 공부하기', done: true},
            {id: 1, text: '컴포넌트 스타일링 해보기', done: false}
        ]
    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        });
    };

    render() {
        const {input, todos} = this.state; //this.state을 하지 않아도 됨
        const {handleChange} = this;

        return (
            <PageTemplate>
                {/*<TodoInput onChange={this.handleChange()} value={this.state.input}/>*/}
                <TodoInput onChange={handleChange} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        );
    }
}

export default App;