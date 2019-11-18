import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
      title: 'Take out the bins',
      completed: false
     },
     {
         id: uuid.v4(),
       title: 'Meet Vin',
       completed: false
      },
      {
        id: uuid.v4(),
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

addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}

  render() {
  return (
    <Router>
    <div className="App">
    <div className="container">
    <Header />
    <Route path="/" render={props => (
      <React.Fragment>
      <AddToDo addToDo={this.addTodo} />
    <Todos todos={this.state.todos} markComplete={this.markComplete}
    delTodo={this.delTodo}/>
      </React.Fragment>
    )} />
    <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
    );
  }
}
export default App;
