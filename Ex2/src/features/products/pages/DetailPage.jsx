import { Box } from '@material-ui/core';
import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ThumbnailProduct from '../components/ThumbnailProduct';
import useProductDetail from '../hooks/useProductDetail';
import { useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import ProductMenu from '../components/ProductMenu';
import HomeSup from '../components/SupMenu/HomeSup';
import DescriptionSup from '../components/SupMenu/DescriptionSup';
import AboutSup from '../components/SupMenu/AboutSup';

function DetailPage(props) {
  const { productId } = useParams();
  const match = useRouteMatch();
  console.log('Match details:', match);
  const { product, loading } = useProductDetail(productId);
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item>
              <ThumbnailProduct product={product} />
            </Grid>
            <Grid item>
              <ProductDetails product={product} />
            </Grid>
          </Grid>
          <ProductMenu mt={3} />
          <Switch>
            <Route path={match.url} exact>
              <HomeSup product={product} />
            </Route>
            <Route path={`${match.url}/DescriptionSup`} exact>
              <DescriptionSup />
            </Route>
            <Route path={`${match.url}/AboutSup`} exact>
              <AboutSup />
            </Route>
          </Switch>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
