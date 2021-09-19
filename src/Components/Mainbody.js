import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Divider, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: 959,
      height: 850,
    },
  },
  title: {
    fontSize: 32,
    font: 'Lato',
    marginTop:45,
  },
  text: {
    fontSize: 18,
    marginTop:17,
  },
  centerArea:{
    width: 781,
    height: 448,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 44,
    marginBottom: 71,
    justifyContent: 'center',
    
  },
  card:{
    width: 145,
    height: 227,
    marginTop:56,
    marginLeft: 'auto',
    marginRight: 'auto',
},
}));

export default function Mainbody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} >
        <Typography className={classes.title} variant="h6" noWrap>
            Collectors Events
        </Typography>
        <Typography className={classes.text} variant="h6" noWrap>
            Participate and win high quality currated NFTs
        </Typography>
        <div className={classes.centerArea}>
            <Paper className={classes.centerArea} variant ="outlined">
                <Card className={classes.card}>
                    ?
                </Card>
                <Typography className={classes.text} variant="h6">
                    Drag a ticket or use the button below 
                    to draw your tickets
                </Typography>
            </Paper>
        </div>
        <Divider/>
      </Paper>
    </div>
  );
}