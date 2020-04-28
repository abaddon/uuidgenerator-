import React from "react";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 'large'
  },
  title: {
    marginRight: theme.spacing(2),
    fontSize: 'large'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <FingerprintIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap className={classes.title}>UUID Generator</Typography>
          <Link to="/">
            <Button variant="contained" color="default" className={classes.button} startIcon={<HomeIcon />}>Home</Button>
          </Link>
          <Link to="/api">
            <Button variant="contained" color="default" className={classes.button} startIcon={<SwapHorizontalCircleIcon />}>API doc</Button>
          </Link>
          <Button variant="contained" color="default" className={classes.button} startIcon={<GitHubIcon />} href="https://github.com/abaddon/uuidgenerator-" target="_blank" rel="noopener">Repository</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;