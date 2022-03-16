import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import categoryApi from './api/categoryApi';

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const params = {
        _limit: 10,
      };
      const categoryList = await categoryApi.getAll(params);
      console.log(categoryList);
      setList(categoryList);
    };
    getData();
  }, []);
  return (
    <div className="App">
      {list.map((item) => (
        <li key={item.id}>{item.shortDescription}</li>
      ))}
    </div>
  );
}

export default App;
