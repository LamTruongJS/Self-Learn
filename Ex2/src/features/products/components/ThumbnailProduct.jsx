import React from 'react';
import PropTypes from 'prop-types';
import { STATIC_HOST } from 'constants/common';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';

ThumbnailProduct.propTypes = {
  product: PropTypes.object,
};

function ThumbnailProduct({ product = {} }) {
  const src = product.thumbnail?.url
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : 'https://via.placeholder.com/150';
  return (
    <Box>
      <img src={src} alt={product.name} width="20%" />
    </Box>
  );
}

export default ThumbnailProduct;
