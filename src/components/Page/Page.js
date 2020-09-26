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
        minHeight: props => props.full ? theme.page.height : 'calc(' + theme.page.height + props.changeHeight + ')',
        margin: props => props.full ? null : theme.page.margin,
        flex: 'auto',
        width: '100%',
        height: '100%',
    },
    wrapper: {
        backgroundColor: props => props.useBackground ? 'rgba(0,0,0, 0.3)' : '',
        fontFamily: 'Cinzel, serif',

        display: 'flex',
        flexDirection: 'column'
    },
}))

const Page = ({ full=true, background='', children, changeHeight='' }) => {
    console.log(changeHeight)
    const classes = useStyles({ background: background, useBackground: background.length > 0, changeHeight, full: full });

    return (
        <Grid container spacing={full ? 0 : 4} className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
            {children}
            </Grid>
        </Grid>
    )
};

export default Page;