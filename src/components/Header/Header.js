import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    color: '#f3f3f3'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
      color: 'white',
    },
    '&:visited': {
      textDecoration: 'none',
      color: 'white',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <NavLink className={classes.link} to="/">Survey Application</NavLink>
          </Typography>
          <NavLink to="/login"><Button className={classes.btn} color="inherit">Login</Button></NavLink>
          <NavLink to="/registration"><Button className={classes.btn} color="inherit">Register</Button></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
