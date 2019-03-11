import React, {Component} from 'react';
import Todo from './Todo';
class App extends Component {
  state = {
    todos : [
      {id: 1, item: 'Play badminton' },
      {id: 2, item: 'Evaluate Assignments' }
    ]
  }

  render() {
    return (
      <div classNmae="App">

      </div>
    );
  }
}

export default App;
