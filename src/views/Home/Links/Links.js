import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    socialLink: {
        paddingRight: 10
    },
    link: {
        textDecoration: 'none',
        color: 'white'
    }
}));

const Links = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item className={classes.socialLink}>
                <a href="https://www.linkedin.com/in/illia-shershun/" target="_blank" className={classes.link}>Linkedin</a>
            </Grid>
            <Grid item className={classes.socialLink}>
                <a href="https://t.me/Shershun_Illia" target="_blank" className={classes.link}>Telegram</a>
            </Grid>
        </Grid>
    )
};

export default Links;
