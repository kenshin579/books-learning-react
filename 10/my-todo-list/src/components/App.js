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

    //일정 데이터 안에 들어가는 id 값
    id = 1;
    getId = () => {
        return ++this.id; //현재 값에서 1을 더한 값을 반환
    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        });
    };

    //새로운 데이터 추가
    handleInsert = () => {
        const {todos, input} = this.state;
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        };

        this.setState({
            todos: [...todos, newTodo], //...은 todos을 복사한다는 의미임
            input: ''
        });
    };

    render() {
        const {input, todos} = this.state; //this.state을 하지 않아도 됨
        const {handleChange, handleInsert} = this;

        return (
            <PageTemplate>
                {/*<TodoInput onChange={this.handleChange()} value={this.state.input}/>*/}
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        );
    }
}

export default App;
