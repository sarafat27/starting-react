import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(33)
  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>price: {props.price}</p>
    </div>
  )
}

export default App;
