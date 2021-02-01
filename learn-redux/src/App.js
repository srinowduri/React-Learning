// import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1> Counter {counter} </h1>
     <button onClick={() => dispatch(increment(5))}>+</button>
     <button onClick={() => dispatch(decrement(5))}>-</button>
     {isLogged ? <h3>Information is not available</h3> : ''}

    </div>
  );
}

export default App;
