import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        padding: 15,
        background: "rgba(255,255,255,0.5)",
        maxWidth: 450
    },
    iconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 15,
        justifyContent: 'center'
    },
    workPlace: {
        fontSize: 16
    },
    workDetails: {
        fontSize: 14,
        color: "rgba(255,255,255,0.5)"
    }
}));

const Work = ({ icon, workPlace='', workDetails='' }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root} >
            <div className={classes.iconWrapper}>
                <img src={icon} alt=' ' width="40" height='40' />
            </div>
            <div className={classes.contentWrapper}>
                <div className={classes.workPlace} > {workPlace} </div>
                <div className={classes.workDetails} > {workDetails} </div>
            </div>
        </Grid>
    )
};  

export default Work;