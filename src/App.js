import React from "react";
import todosData from "./todosData";
import TodoItem from "./TodoItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: todosData }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      let newTodos = prevState.todos.map(item => {
        return {...item}
      });
      let toChangeTodo = newTodos.find(todo => todo.id === id);
      toChangeTodo.completed = !toChangeTodo.completed;
      return {todos: newTodos};
    })
  }

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item = {item} handleChange={this.handleChange} />)
    return (<div className="todo-list"> {todoItems}</div>)
  }
}

export default App;