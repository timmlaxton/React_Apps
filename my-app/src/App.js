import React, {Component} from 'react';
import Header from './components/layout/header'
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
      title: 'Take out the bins',
      completed: false
     },
     {
         id: 2,
       title: 'Meet Vin',
       completed: false
      },
      {
        id: 3,
      title: 'Feed dog',
      completed: false
     }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  //DELETE ITEM
  delTodo = (id) => {
this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }


  render() {
  return (
    <div className="App">
    <Header />
  <Todos todos={this.state.todos} markComplete={this.markComplete}
  delTodo={this.delTodo}/>
    </div>
  );
 }
}
export default App;
