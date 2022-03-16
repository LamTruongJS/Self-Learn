import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
FilterByService.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    '& > li': {
      margin: 0,
    },
  },
}));
function FilterByService({ onChange = null, filter = {} }) {
  const classes = useStyle();

  const service = [
    {
      label: 'Có khuyến mãi',
      value: 'isPromotion',
    },
    {
      label: 'Miễn phí giao hàng',
      value: 'isFreeShip',
    },
  ];
  const handleChangeService = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    onChange({ [name]: value });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul className={classes.list}>
        {service.map((item, index) => (
          <li key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  name={item.value}
                  onChange={handleChangeService}
                  checked={Boolean(filter[item.value])}
                  color="primary"
                />
              }
              label={item.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
