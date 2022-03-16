import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import categoryApi from 'api/categoryApi';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import FilterSkeleton from './FilterSkeleton';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: '0',
    margin: '0',
    '& > li': {
      marginTop: theme.spacing(1),
      listStyle: 'none',
      transition: 'all .25s',
      '&:hover': {
        color: theme.palette.primary.dark,
        cursor: 'pointer',
      },
    },
  },
}));
function FilterByCategory({ onChange = null, filter = {} }) {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const handleFilterByCategory = (id, name) => {
    onChange(id, name);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryApi.getAll();
        console.log(response);
        setCategoryList(response);
        setLoading(true);
      } catch (e) {
        console.log("Can't get category list: ", e);
      }
    })();
  }, []);
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {loading ? (
          categoryList?.map((category) => (
            <li
              key={category.id}
              onClick={() => handleFilterByCategory(category.id, category.name)}
            >
              <Typography variant="body2">{category.name}</Typography>
            </li>
          ))
        ) : (
          <FilterSkeleton />
        )}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
