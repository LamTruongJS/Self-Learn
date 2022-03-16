import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { PropTypes } from 'prop-types';

ProductSort.propTypes = {
  onChange: PropTypes.func,
  sort: PropTypes.string,
};

function ProductSort({ onChange = null, sort = '' }) {
  const valueSort = {
    ASC: 'salePrice:ASC',
    DESC: 'salePrice:DESC',
  };
  const [value, setValue] = useState(sort);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={valueSort.ASC} label="Tăng dần theo giá" />
        <Tab value={valueSort.DESC} label="Giảm dần theo giá" />
      </Tabs>
    </Box>
  );
}

export default ProductSort;
