import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

let reducerFunction = (x, y) => {
  
  //every function return something
  
  if (y.type === 'INCREMENTBYONE') {
    return x + 1;
  } else if (y.type === 'DECREMENTBYONE') {
    return x - 1;
  } else {
    return x;
  }

  //reducer function always return new state

  return x + 1

}

function App() {

  const INCREMENTBYONE = "INCREMENTBYONE";
  const DECREMENTBYONE = "DECREMENTBYONE";

  // 1. States/Hook
  const [x, setX] = useState(100);
  const [newData, dispatch] = useReducer(reducerFunction, x);

  //2. Function Defination

  let Increment = () => { //FatArrow Function
    dispatch({ type: INCREMENTBYONE }); //Actual Argument
  }

  let Decrement = () => { //FatArrow Function
    dispatch({ type: DECREMENTBYONE  }); //Actual Argument
  }

  //3. return statement JSX

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className='flex'>
        <button className='button' onClick={() => { Increment(); }}>Increment</button>
        <button className='button' onClick={() => { Decrement(); }}>Decrement</button>
        </div>        
        {newData}
      </header>
    </div>
  );
}

export default App;
