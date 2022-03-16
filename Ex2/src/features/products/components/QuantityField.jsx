import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from '@mui/material/Button';
import { useState } from 'react';
QuantityField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object,
};

function QuantityField({ name = '', label = '', form = {} }) {
  const { control, setValue } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value = 0, name },
        fieldState: { invalid, error },
      }) => (
        <>
          <IconButton
            onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
          >
            <AddIcon />
          </IconButton>
          <TextField
            type="number"
            variant="outlined"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
          <IconButton
            onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
          >
            <RemoveIcon />
          </IconButton>
          <FormHelperText error={invalid}>{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}

export default QuantityField;
