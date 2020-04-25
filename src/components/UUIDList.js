import React, { useState, useEffect }from "react";
import UUIDCard from './uuidCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

export const AuthContext = React.createContext(); // added this
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
    }
}));


const initialState = {
    isFetching: false,
    hasError: false,
    uuids:["c8039e17-230c-48ea-955a-3533a748990b"]
 }

 const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SONGS_REQUEST":
        return {
          ...state,
          isFetching: true,
          hasError: false
        };
      case "FETCH_SONGS_SUCCESS":
        return {
          ...state,
          isFetching: false,
          uuids: action.payload
        };
      case "FETCH_SONGS_FAILURE":
        return {
          ...state,
          hasError: true,
          isFetching: false
        };
      default:
        return state;
    }
  };
  

export const UUIDList = () => {
    
    const [state, dispatch] = React.useReducer(reducer, initialState);    
    
    const handleUUIDRequest = event => {
        event.preventDefault();
        dispatch({
          type: "FETCH_SONGS_REQUEST"
        });
        fetch("https://api.uuidgenerator.info/identifier/uuid", {
          method: "get",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            throw res;
          })
          .then(resJson => {
            dispatch({
                type: "FETCH_UUIDS_SUCCESS",
                uuids: resJson
            })
          })
          .catch(error => {
            console.log(error);
            dispatch({
              type: "FETCH_SONGS_FAILURE"
            });
          });
      };
    

    const classes = useStyles();
    return (
        <AuthContext.Provider value={{state,dispatch}}>
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
                          {
                            state.isFetching ? (
                              <span className="loader">LOADING...</span>
                            ): state.hasError ? (
                              <span className="error">AN ERROR HAS OCCURED</span>
                            ): (
                              <List dense="false">
                              {state.uuids.map(code => (<ListItem><UUIDCard uuid={code} label="Copy"/></ListItem>))}
                              </List>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleUUIDRequest}>Refresh</Button>
                        </Grid>
                    </Grid> 
                </div>
            </Container>
        </AuthContext.Provider>
  );
};
export default UUIDList;