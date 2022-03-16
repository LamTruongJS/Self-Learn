import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Product from './features/products/index';
import Header from './components/header/index';
import HomePage from './features/HomePage/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/products" component={Product} />
      </Switch>
    </div>
  );
}

export default App;
