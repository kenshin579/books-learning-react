import React, {Component} from 'react';
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
    state = {
        input: '' //input 값
    };

    handleChange = (e) => {
        const {value} = e.target;
        this.setState({
            input: value
        });
    };

    render() {
        const {input} = this.state; //this.state을 하지 않아도 됨
        const {handleChange} = this;

        return (
            <PageTemplate>
                {/*<TodoInput onChange={this.handleChange()} value={this.state.input}/>*/}
                <TodoInput onChange={handleChange} value={input}/>
                <TodoList/>
            </PageTemplate>
        );
    }
}

export default App;
