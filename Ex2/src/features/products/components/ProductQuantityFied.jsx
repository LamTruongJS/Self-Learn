import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import QuantityField from './QuantityField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@mui/material/Button';
ProductQuantityFied.propTypes = {};

function ProductQuantityFied(props) {
  const schema = yup.object().shape({
    qualified: yup.string().required('Please enter number'),
  });
  const form = useForm({
    defaultValue: {
      qualified: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (formState) => {
    console.log(formState);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="qualified" form={form} label="Số lượng" />
      <Button type="submit" variant="contained" color="primary">
        Xác nhận lựa chọn
      </Button>
    </form>
  );
}

export default ProductQuantityFied;
