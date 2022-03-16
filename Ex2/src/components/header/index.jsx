import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <Link to="/">Trang chủ</Link>
      <Link to="/products">Sản phẩm</Link>
    </div>
  );
}

export default Header;
