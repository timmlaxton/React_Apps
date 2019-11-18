import React, {Component} from 'react';
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


  render() {
  return (
    <div className="App">
  <Todos todos={this.state.todos}/>
    </div>
  );
 }
}
export default App;
