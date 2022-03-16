import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import { Skeleton } from '@mui/material';

FilterSkeleton.propTypes = {
  length: PropTypes.number,
};

FilterSkeleton.defaultProps = {
  length: 6,
};

function FilterSkeleton({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index}>
            <Box paddingTop={1}>
              <Skeleton variant="text" width={200} height={20} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FilterSkeleton;
