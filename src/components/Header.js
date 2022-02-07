import React from 'react';
import { Toolbar, Typography, IconButton, makeStyles, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AuthenticationButton from './AuthenticationButton';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: '#150c25',
  },
  menuButton: {
    marginRight: 10,
  },
  title: {
    flexGrow: 1,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
          <AuthenticationButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;