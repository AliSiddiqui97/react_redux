import React from 'react';
import {useSelector,useDispatch } from 'react-redux'
import {increment} from './actions'
import {decrement} from './actions'

function App() {
  const counter = useSelector(state=>state.counter)
  const logged = useSelector(state=>state.logged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter} </h1>
      <button onClick={()=>dispatch(increment(5))}>
        +
      </button>
      <button onClick={()=>dispatch(decrement())}>
        -
      </button>
      {
        logged? <h3>Logged:</h3> : ""
      }
    </div>
  );
}

export default App;
