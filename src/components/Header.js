import React from "react";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 'large'
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <FingerprintIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          UUID Generator
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;