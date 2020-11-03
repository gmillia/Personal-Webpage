import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color: 'white',
        padding: 15,
        margin: '0px 0px 15px 0px',
        background: "#11296b",
        minWidth: 345,
        border: '1px solid #ffd100',
        borderRadius: '2%',
        [theme.breakpoints.up('sm')]: {
            margin: '0px 15px 15px 0px',
            '&:nth-child(2)': {
                marginLeft: 0
            },
            '&:nth-child(3)': {
                marginRight: 0
            }
        }
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
            <Grid item className={classes.iconWrapper}>
                <img src={icon} alt=' ' width="40" height='40' />
            </Grid>
            <Grid item className={classes.contentWrapper}>
                <div className={classes.workPlace} > {workPlace} </div>
                <div className={classes.workDetails} > {workDetails} </div>
            </Grid>
        </Grid>
    )
};  

export default Work;