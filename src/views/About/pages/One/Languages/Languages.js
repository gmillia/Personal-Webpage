import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {

        color: 'white',
        padding: 30,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 130,
        }
    },
    header: {
        display: 'inline-block',
        paddingBottom: 5,
        borderBottom: '1px solid gold',
        fontSize: 20,
        width: 'auto',
        fontWeight: 700,
        letterSpacing: 2
    },
    languages: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

const Languages = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root} >
            <div className={classes.header}>
                /03/Languages
            </div>
            <Grid item className={classes.languages}>
                <div>English</div>
                <div>Russian</div>
                <div>Ukrainian</div>
            </Grid>
        </Grid>
    )
};  

export default Languages;