import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import { FormHelperText } from '@mui/material';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,

  disabled: PropTypes.bool,
};
InputField.defaultProps = {
  disabled: false,
};

function InputField(props) {
  const { name, label, form, type, disabled } = props;
  const { control } = form;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <>
          <TextField
            variant="outlined"
            type={type}
            label={label}
            onChange={onChange}
            disabled={disabled}
            fullWidth
            error={invalid}
          />
          <FormHelperText error={invalid}>{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}

export default InputField;
