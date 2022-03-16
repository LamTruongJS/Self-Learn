import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { STATIC_HOST } from 'constants/index';
import formatPrice from 'utils/common';
import Typography from '@mui/material/Typography';
import { useHistory, useRouteMatch } from 'react-router-dom';
Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product = {} }) {
  const history = useHistory();
  const match = useRouteMatch();

  const src = product.thumbnail?.url
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : 'https://via.placeholder.com/150';
  const handleDetailProduct = () => {
    history.push(`/products/${product.id}`);
  };
  return (
    <Box padding={1} onClick={() => handleDetailProduct()}>
      <Box padding={1} minHeight="215px">
        <img src={src} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontWeight="bold" fontSize="16px" mr={1}>
          {formatPrice(product.salePrice)}
          {product.promotionPercent > 0 ? ` - ${product.promotionPercent} %` : ''}
        </Box>
      </Typography>
    </Box>
  );
}

export default Product;
