import Box from '@mui/material/Box';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';

import ListPage from './pages/ListPage';

Product.propTypes = {};

function Product(props) {
  const match = useRouteMatch();

  // console.log(match);
  // console.log('URL: ', match.url);
  // console.log('Path: ', match.path);
  console.log('RouterMatch:', match);
  console.log(`${match.url}/:productId`);
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage}></Route>
        <Route path={`${match.url}/:productId`} component={DetailPage}></Route>
      </Switch>
    </Box>
  );
}

export default Product;
