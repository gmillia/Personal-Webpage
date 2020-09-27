import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 15,
        }
    },
    header: {
        display: 'table',
        fontSize: 45,
        fontWeight: 700,
        [theme.breakpoints.up('sm')]: {
            display: 'inline-block',
            writingMode: 'vertical-rl',
        }
    },
    text: {
        paddingRight: 10
    }
}))

const Soccer = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root} >
            <div className={classes.text}>
                Due to my ACL injury, my passion for this game transformed into a coaching positions at David Douglas High School and Portland State University.
            </div>
            <div className={classes.header}>SOCCER</div>
        </Grid>
    )
};

export default Soccer;