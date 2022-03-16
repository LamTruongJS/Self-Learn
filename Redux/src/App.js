import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './reducer/counterSlice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncrease = (counter) => {
    const action = increase(counter);
    dispatch(action);
  };
  return (
    <div className="App">
      <h1>Số hiện tại: {counter}</h1>
      <button onClick={() => handleIncrease(counter)}>Increment</button>
    </div>
  );
}

export default App;
