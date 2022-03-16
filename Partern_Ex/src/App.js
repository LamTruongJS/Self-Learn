import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'Components/Header';
import CounterFeature from './features/Counter/index';
import TodoFeature from './features/Todo/index';
import AlbumFeature from './features/Album/index';
import ProductFeature from './features/product/index';
import NotFound from './Components/NotFound/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={CounterFeature} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/albums" component={AlbumFeature}></Route>
        <Route path="/products" component={ProductFeature}></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
