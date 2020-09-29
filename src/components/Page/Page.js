import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        background: props => props.useBackground ? `url(${props.background}) no-repeat center` : 'transparent', 
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        minHeight: theme.page.height,
        flex: 'auto',
        width: '100%',
    },
    wrapper: {
        backgroundImage: props => props.useBackground && props.darken ? `linear-gradient(${props.wrapperDirection}, rgba(0,0,0,0.1), rgba(0,0,0,0.9))` : ``,
        fontFamily: 'Cinzel, serif',
        display: 'flex',
        flexDirection: 'column'
    },
}))

const Page = ({ background='', useBackground=false, wrapperDirection='to right', darken=true, children }) => {
    const classes = useStyles({ background: background, useBackground: useBackground, wrapperDirection: wrapperDirection, darken: darken });

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
            {children}
            </Grid>
        </Grid>
    )
};

export default Page;