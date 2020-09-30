import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { Underline as Button } from 'components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: "white"
    },
    name: {
        fontSize: 60
    }
}));

const Card = ({ name='Project Name', linkTo='/', description='Project Description', image }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.name}>{name}</Grid>
            <Grid item xs={12} className={classes.link}>
                <Button linkTo={linkTo} name='Visit' />
            </Grid>
            <Grid item xs={12} className={classes.description}>{description}</Grid>
            <Grid item xs={12} className={classes.image}></Grid>
        </Grid>
    )
};  

export default Card;