import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        background: props => props.useBackground ? `url(` + props.background + `) no-repeat center` : 'transparent',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        minHeight: theme.page.height,
        margin: theme.page.margin
    },
    wrapper: {
        backgroundColor: props => props.useBackground ? 'rgba(0,0,0, 0.7)' : '',
        fontFamily: 'Cinzel, serif',
    },
}))

const Page = ({ background='', children }) => {
    const classes = useStyles({ background: background, useBackground: background.length > 0 });

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
            {children}
            </Grid>
        </Grid>
    )
};

export default Page;