import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Button
import { Underline as Button } from '../../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 15,
        }
    },
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        [theme.breakpoints.up('sm')]: {
            flexFlow: 'row',
        }
    },
    header: {
        display: 'table',
        fontSize: 24,
        paddingTop: 20,
        paddingBottom: 20,
        [theme.breakpoints.up('sm')]: {
            fontSize: 42,
            fontWeight: 700,
            paddingTop: 0,
            paddingBottom: 0,
            display: 'inline-block',
            writingMode: 'vertical-rl',
        }
    },
    text: {
        paddingRight: 10,
        color: "rgb(220,220,220)",
    }
}))

const Soccer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Grid item xs={12} className={classes.root} >
            <Grid item xs={12} className={classes.wrapper}>
                { desktop ? null : <div className={classes.header}>{desktop ? 'SOCCER' : 'Soccer' }</div> }
                <div className={classes.text}>
                    Due to my ACL injury, my passion for this game transformed into coaching positions at a David Douglas High School and Portland State University.
                    <Button linkTo='/resume' name='Resume' />
                </div>
                { desktop ? <div className={classes.header}>SOCCER</div> : null }
            </Grid>
        </Grid>
    )
};

export default Soccer;