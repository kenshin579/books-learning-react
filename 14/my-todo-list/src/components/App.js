import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text: `일정 ${index}`, done: false})
);

class App extends Component {
    state = {
        input: '', //input 값
        //일정 데이터 초기값
        todos: initialTodos
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

    //to do 아이템 토글하기
    handleToggle = (id) => {
        console.log('handleToggle');
        //id로 배열의 인덱스를 찾습니다.
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        //찾은 데이터의 done 값을 반전시킴
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        //slice를 사용하여 우리가 찾은 index 전후의 데이터들을 복사함
        //그리고 그 사이에는 변경된 to do 객체를 넣어줌

        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index + 1, todos.length)
            ]
        });
    };

    handleRemove = (id) => {
        console.log('handleRemove');
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index + 1, todos.length)
            ]
        });
    };

    render() {
        const {input, todos} = this.state; //this.state을 하지 않아도 됨
        const {handleChange, handleInsert, handleToggle, handleRemove} = this;

        return (
            <PageTemplate>
                {/*<TodoInput onChange={this.handleChange()} value={this.state.input}/>*/}
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </PageTemplate>
        );
    }
}

export default App;
