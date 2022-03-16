import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect, useMemo, useState } from 'react';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductsList from '../components/ProductsList';
import ProductSort from '../components/ProductSort';
import productApi from './../../../api/productApi';
import ProductFilter from './../components/ProductFilter';
import FilterViewer from './../components/Filters/FilterViewer';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
ListPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    padding: '30px 0 20px',
  },
}));
function ListPage(props) {
  const classes = useStyles();
  const [listProduct, setListProduct] = useState([]);

  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });

  const handlePagination = (e, page) => {
    const filter = {
      ...queryParams,
      _page: page,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };
  const handleSortTabs = (sortTabs) => {
    const filter = {
      ...queryParams,
      _sort: sortTabs,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const handleFilter = (value) => {
    const filter = {
      ...queryParams,
      ...value,
    };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const handleChip = (newFilter) => {
    const filter = { ...newFilter };
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  };

  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true',
    };
  }, [location.search]);
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);

        setListProduct(data);
        setPagination(pagination);

        console.log('renderListPageFilter::', queryParams);
      } catch (err) {
        console.log("can't get Api", err);
      }
    })();
    setLoading(false);
  }, [queryParams]);
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper elevation={0}>
              <ProductFilter filter={queryParams} onChange={handleFilter} />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={0}>
              <ProductSort sort={queryParams._sort} onChange={handleSortTabs} />
              <FilterViewer filter={queryParams} onChange={handleChip} />
              {!loading ? <ProductsList data={listProduct} /> : <ProductSkeleton length={9} />}
              <Pagination
                className={classes.pagination}
                page={pagination.page}
                count={Math.ceil(pagination.total / pagination.limit)}
                color="primary"
                onChange={handlePagination}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
