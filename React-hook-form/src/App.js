import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './features/page/TodoForm';
import TodoList from './features/page/TodoList/index';

function App() {
  const [todoList, setTodoList] = useState([]);
  const handleTodoForm = (values) => {
    console.log('App: ', values);
    const newTodoList = [...todoList];
    newTodoList.push(values);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <TodoForm onSubmit={handleTodoForm} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
