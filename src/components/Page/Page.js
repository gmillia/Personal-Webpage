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
        background: props => props.darken ? props.useGradient ? `linear-gradient(${props.wrapperDirection}, rgba(0,0,0,0.1), rgba(0,0,0,0.9))` : props.darkenColor : ``,
        fontFamily: 'Cinzel, serif',
        display: 'flex',
        flexDirection: 'column'
    },
    border: {
        border: '1px solid rgba(255,255,255,0.5)'
    },
    grid: {
        position: 'absolute',
        top: 50,
        left: 0,
        width: '100%',
        minHeight: theme.page.height,
        display: 'flex',
    }
}))

const Page = ({ background='', useBackground=false, wrapperDirection='to right', darken=true, useGradient=true, children, darkenColor='rgba(0,0,0,0.5)', withGrid=false }) => {
    const classes = useStyles({ background: background, useBackground: useBackground, wrapperDirection: wrapperDirection, darken: darken, useGradient: useGradient, darkenColor: darkenColor });

    return (
        <Grid container spacing={0} className={classes.root}>

            <Grid item xs={12} className={classes.wrapper}>
                {children}
                </Grid>
        </Grid>
    )
};

export default Page;