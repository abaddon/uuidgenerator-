import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

export default function  UUIDCard({uuid, label}){    
    const classes = useStyles();
    
    const [copyLabel, setCopyLabel] = useState(label); 

    const handleOnClick = event => {
      ReactGA.event({
        category: 'User',
        action: 'uuidv4 copied'
      });
    }

    return (
         <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h5">{uuid}</Typography>
            </CardContent>
            <CardActions>
                <CopyToClipboard text={uuid} onCopy={() => {setCopyLabel("Copied!")}}>
                    <Button size="small" color="primary" onClick={handleOnClick}>{copyLabel}</Button>
                </CopyToClipboard>
            </CardActions>
        </Card>
    )
}