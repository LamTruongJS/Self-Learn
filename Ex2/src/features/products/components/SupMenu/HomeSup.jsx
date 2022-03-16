import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Paper from '@mui/material/Paper';

HomeSup.propTypes = {
  product: PropTypes.object,
};

function HomeSup({ product = {} }) {
  console.log(product.description);
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default HomeSup;
