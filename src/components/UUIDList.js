import React,{useEffect,useState} from "react";
import UUIDCard from './uuidCard';
import ListItem from '@material-ui/core/ListItem';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ReactGA from 'react-ga';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        fontSize: 'large'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        minHeight: '40vh'
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
}));

const initialState =  {
  isFetching: false,
  hasError: false,
  uuids:[]
}

 const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_UUIDS_REQUEST":
        return {
          ...state,
          isFetching: true,
          hasError: false,
          uuids:[]
        };
      case "FETCH_UUIDS_SUCCESS":
        return {
          ...state,
          isFetching: false,
          uuids: action.uuids
        };
      case "FETCH_UUIDS_FAILURE":
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
    const [count, setCount] = useState(0);

    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    function callApi(){
      fetch("https://api.uuidgenerator.info/uuids/v4?quantity=3", {

              method: "get",
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then(res => {
                if (res.ok) {
                  return res.json();
                }else {
                  throw res;
                }
              })
              .then(resJson => {
                dispatch({
                    type: "FETCH_UUIDS_SUCCESS",
                    uuids: resJson.uuids
                })
              })
              .catch(error => {
                console.log(error);
                dispatch({
                  type: "FETCH_UUIDS_FAILURE"
                });
              });
    }
    
    const handleUUIDRequest = event => {
        event.preventDefault();

        ReactGA.event({
          category: 'User',
          action: 'uuidv4 refreshed'
        });

        dispatch({
          type: "FETCH_UUIDS_REQUEST"
        });
        callApi();
      };

    const classes = useStyles();

    useEffect(function load() {
      if (count === 0) {
        setCount(1);
        callApi();
      }
    }, [count]);
      

    return (
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
                            {state.isFetching ? (
                              <span className="loader">LOADING...</span>
                            ) : state.hasError ? (
                              <span className="error">AN ERROR HAS OCCURED</span>
                            ) : (
                                state.uuids.map(code => (<ListItem><UUIDCard key={code} uuid={code} label="Copy"/></ListItem>))
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
  );
};
export default UUIDList;