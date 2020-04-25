import React, { useState, useEffect } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import UUIDCard from './components/uuidCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.uuidgenerator.info/">
        UUID Generator
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 'large'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function App() {

  const classes = useStyles();

  const [uuids, setUUIDs] = useState([]); 
  
  useEffect(() => {
    fetchData();
  },[]);

  // 
  async function fetchData() {
    const res = await fetch("https://api.uuidgenerator.info/identifier/uuid");
    res
      .json()
      .then(res => setUUIDs(res.map((c) => ([c,"Copy"]))));
  }

  return (
    <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <FingerprintIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              UUID Generator
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              <FingerprintIcon className={classes.icon}  style={{ fontSize: 60 }} /> 
           </Typography>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Online UUID Generator
            </Typography>
            <div className={classes.cardGrid}>
              
              <Grid container spacing={1} justify="center">
                <Grid item>
                <List dense="false">
                {uuids.map((c, index) => (
                  <ListItem><UUIDCard uuid={c[0]} label={c[1]}/></ListItem>
                ))}
                  </List>
                </Grid>
              </Grid>
  
              <Grid container spacing={1} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={fetchData}>Refresh</Button>
                </Grid>
              </Grid> 
            </div>
          </Container>
          
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
  );
}