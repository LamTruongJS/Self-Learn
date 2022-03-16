import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Grid';

ProductSkeleton.propTypes = {
  length: PropTypes.number,
};

function ProductSkeleton({ length = 0 }) {
  console.log(Array.from(new Array(length)).length);
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Box padding={1}>
              <Skeleton variant="rect" width="100%" height={200} />
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductSkeleton;