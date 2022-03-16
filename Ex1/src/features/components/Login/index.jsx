import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { unwrapResult } from '@reduxjs/toolkit';
import InputField from 'Components/form-control/InputField';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import InputPass from './../../../Components/form-control/form-pass/index';
import { login, register } from './../../page/User/userSlice';
import { useSnackbar } from 'notistack';
import { PropTypes } from 'prop-types';

const theme = createTheme();
Login.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};
export default function Login(props) {
  const { closeDialog } = props;
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    try {
      const action = login(data);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('new user', user);
      enqueueSnackbar('Login successfully!!! ', { variant: 'success' });
      closeDialog();
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('Fail: ', error);
    }
  };

  const schema = yup.object({
    password: yup.string().required('Please Enter Password'),

    identifier: yup
      .string()
      .required('Please Enter Email')
      .email('Please enter a valid email address'),
  });

  const form = useForm({
    defaultState: {
      password: '',
      identifier: '',
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {isSubmitting && <LinearProgress />}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form
            component="form"
            noValidate
            onSubmit={form.handleSubmit(handleSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputField type="email" name="identifier" label="Email" form={form} />
              </Grid>
              <Grid item xs={12}>
                <InputPass type="password" name="password" label="Password" form={form} />
              </Grid>
            </Grid>
            <Button
              disabled={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
