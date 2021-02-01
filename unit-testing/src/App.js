import React, { Component } from 'react';
import './App.css';
import StudentsList from './components/Students/StudentsList';
class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Unit Testing</h1>
        </header>
        <StudentsList />
      </div>
    ); 
  }
}

export default App;
