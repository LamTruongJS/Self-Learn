import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

InputPass.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
InputPass.defaultProps = {
  label: '',
  disabled: false,
};

function InputPass(props) {
  const { label, disabled, type, form, name } = props;
  const { control } = form;
  const [values, setValues] = useState({ showPassword: false });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          <FormControl error={invalid} fullWidth>
            <InputLabel htmlFor={name}>{label}</InputLabel>

            <OutlinedInput
              variant="outlined"
              id={name}
              type={values.showPassword ? 'text' : 'password'}
              label={label}
              onChange={onChange}
              value={values.password}
              fullWidth
              disabled={disabled}
              error={invalid}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormHelperText error={invalid}>{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}

export default InputPass;
