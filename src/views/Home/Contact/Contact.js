import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    header: {
        paddingBottom: 10,
    },
    info: {
        fontSize: 15,
        fontWeight: 100,
        fontFamily: 'Open Sans Condensed, sans-serif',
        paddingTop: 5,
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}))

const Contact = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.header} >Get in touch</Grid>
            <Grid item xs={12} className={classes.info}>
                <a href="tel:15039951757" className={classes.link}>t. (503)-995-1757</a>
            </Grid>
            <Grid item xs={12} className={classes.info}>
                <a href="mailto:illiashershun.gmail.com" className={classes.link} >e. illiashershun@gmail.com</a>
            </Grid>
        </Grid>
    )
};

export default Contact;
