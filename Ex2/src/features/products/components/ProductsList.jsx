import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';

ProductsList.propTypes = {
  data: PropTypes.array,
};

function ProductsList({ data = [] }) {
  return (
    <div>
      <Box>
        <Grid container>
          {data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductsList;
