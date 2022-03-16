import { makeStyles } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import SignUp from 'features/components/SignUp';
import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import Login from './../../features/components/Login';
import { useSelector, useDispatch } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logOut } from 'features/page/User/userSlice';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  logo: {
    color: red[400],
  },
  iconClose: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(-10),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
  submit: {},
}));
const Header = () => {
  const [open, setOpen] = useState(false);
  const loginUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loginUser.id;
  const MODE = {
    REGISTER: 'register',
    LOGIN: 'login',
  };
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState('');

  const dispatch = useDispatch();
  const userNameLogin = loginUser.fullName;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    const action = logOut();
    dispatch(action);
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography className={classes.logo} variant="h6" noWrap component="div">
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Button onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                Login
              </Button> */}
            {!isLoggedIn && (
              <Button onClick={handleClickOpen} sx={{ p: 0, color: 'white' }}>
                LOGIN
              </Button>
            )}
            <></>
            {isLoggedIn && (
              <>
                <Button onClick={handleClick} sx={{ p: 0, color: 'white' }}>
                  {userNameLogin}
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </Menu>
              </>
            )}

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <IconButton className={classes.iconClose} onClick={handleClose}>
          <Close />
        </IconButton> */}
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <SignUp closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                  Dont't have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </AppBar>
  );
};
export default Header;
