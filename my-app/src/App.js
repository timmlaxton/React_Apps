import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(res => this.setState({todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter
        (todo => todo.id !== id)] }));

  }

addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res => this.setState({ todos:
  [...this.state.todos, res.data] }));

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
