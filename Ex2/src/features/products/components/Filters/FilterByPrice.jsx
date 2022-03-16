import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },

  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    '& > span': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  },
}));

function FilterByPrice({ onChange = null }) {
  const classes = useStyle();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleGetPrice = (e) => {
    const newValue = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: newValue });
  };
  const handleFilterPrice = () => {
    onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">KHOẢNG GIÁ</Typography>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleGetPrice} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleGetPrice} />
      </Box>
      <Button variant="outlined" color="primary" size="small" onClick={handleFilterPrice}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
