import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
FilterViewer.propTypes = {
  filter: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterViewer({ filter = {}, onChange = null }) {
  console.log('filterViewer 1: ', filter);
  const LIST_FILTER = [
    {
      id: 1,
      type: '_sort',
      getLabel: 'Tăng dần theo giá',
      onVisible: filter._sort === 'salePrice:ASC',
      isDelete: false,
      isChange: false,
    },
    {
      id: 2,
      type: '_sort',
      getLabel: 'Giảm dần theo giá',
      onVisible: filter._sort === 'salePrice:DESC',
      isDelete: false,
      isChange: false,
    },
    {
      id: 3,
      type: 'isPromotion',
      getLabel: 'Có khuyến mãi',
      onVisible: filter.isPromotion,
      isDelete: false,
      isChange: true,
      onToggle: (filter) => {
        const newFilter = { ...filter };
        if (newFilter.isPromotion) {
          delete newFilter.isPromotion;
        } else {
          newFilter.isPromotion = true;
        }
        return newFilter;
      },
    },
    {
      id: 4,
      type: 'isFreeShip',
      getLabel: 'Miễn phí vận chuyển',
      onVisible: filter.isFreeShip,
      isDelete: false,
      isChange: true,
      onToggle: (filter) => {
        const newFilter = { ...filter };
        if (newFilter.isFreeShip) {
          delete newFilter.isFreeShip;
        } else {
          newFilter.isFreeShip = true;
        }
        return newFilter;
      },
    },
    {
      id: 5,
      type: 'category',
      getLabel: filter['category.name'] ?? '',
      onVisible: filter['category.name'] ? true : false,
      isDelete: true,
      onRemove: (filter) => {
        const newFilter = { ...filter };
        delete newFilter['category.name'];
        delete newFilter['category.id'];
        return newFilter;
      },
      isChange: false,
    },
    {
      id: 6,
      type: 'salePrice',
      getLabel: `Giá từ: ${filter['salePrice_gte']} - ${filter['salePrice_lte']}`,
      onVisible: filter['salePrice_gte'] || filter['salePrice_lte'] ? true : false,
      isDelete: true,
      onRemove: (filter) => {
        const newFilter = { ...filter };
        delete newFilter['salePrice_gte'];
        delete newFilter['salePrice_lte'];
        return newFilter;
      },
      isChange: false,
    },
  ];

  console.log('List_Filter', LIST_FILTER);
  const newList = LIST_FILTER.filter((item) => item.onVisible === true);
  return (
    <Stack direction="row" spacing={1} mt={3} ml={4}>
      {newList.map((item) => (
        <Chip
          key={item.id}
          label={item.getLabel}
          onDelete={
            item.isDelete
              ? () => {
                  if (!onChange) return;
                  const newFilter = item.onRemove(filter);
                  onChange(newFilter);
                }
              : null
          }
          clickable={item.isChange}
          onClick={
            item.isChange
              ? () => {
                  if (!onChange) return;
                  const newFilter = item.onToggle(filter);
                  console.log('newFilter onClick', newFilter);
                  onChange(newFilter);
                }
              : null
          }
        />
      ))}
    </Stack>
  );
}

export default FilterViewer;
