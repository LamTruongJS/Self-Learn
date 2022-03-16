import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.object,
};

function ProductFilter({ onChange = null, filter = {} }) {
  const valueSort = { ...filter };
  const handleFilterByCategory = (id, name) => {
    const newValue = {
      ...valueSort,
      'category.id': id,
      'category.name': name,
    };
    onChange(newValue);
  };
  const handleFilter = (value) => {
    const newValue = {
      ...valueSort,
      ...value,
    };
    onChange(newValue);
  };

  console.log('ProductFilter: ', filter);
  return (
    <div>
      <FilterByCategory filter={filter} onChange={handleFilterByCategory} />
      <FilterByPrice filter={filter} onChange={handleFilter} />
      <FilterByService filter={filter} onChange={handleFilter} />
    </div>
  );
}

export default ProductFilter;
