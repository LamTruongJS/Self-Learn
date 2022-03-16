import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import formatPrice from 'utils/common';
import ProductQuantityFied from './ProductQuantityFied';

ProductDetails.propTypes = {
  product: PropTypes.object,
};

function ProductDetails({ product = {} }) {
  console.log(product);
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
  return (
    <Box>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2">{shortDescription}</Typography>
      <Box>
        <Box component="span">{formatPrice(salePrice)}</Box>
        {promotionPercent > 0 && (
          <>
            <Box component="span">{formatPrice(originalPrice)}</Box>
            <Box component="span">{`-${promotionPercent}%`}</Box>
          </>
        )}
      </Box>
      <ProductQuantityFied />
    </Box>
  );
}

export default ProductDetails;
