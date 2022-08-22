import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="count--container">
          {count}
          <div className="count--button">
            <button onClick={increaseHandler}>+1</button>
            <button onClick={decreaseHandler}>-1</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
