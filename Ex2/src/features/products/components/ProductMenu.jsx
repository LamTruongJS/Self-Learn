import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { Box, Link } from '@material-ui/core';

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const match = useRouteMatch();

  return (
    <Box component="ul">
      <li>
        <Link to={match.url} component={NavLink}>
          Trang 1
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/DescriptionSup`} component={NavLink}>
          Trang 2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/AboutSup`} component={NavLink}>
          Trang 3
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
