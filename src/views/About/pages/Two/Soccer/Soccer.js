import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Fade } from '@material-ui/core';
import { Textfit } from 'react-textfit';

//Button
import { Underline as Button, Visibility } from 'components';

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
        display: 'flex',
        paddingTop: 20,
        paddingBottom: 20,
        [theme.breakpoints.up('sm')]: {
            fontWeight: 700,
            paddingTop: 0,
            paddingBottom: 0,
            writingMode: 'vertical-rl',
        }
    },
    text: {
        paddingRight: 10,
        color: "rgb(220,220,220)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
}))

const Soccer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Visibility partialVisibility={true} >
            <Fade in={true} timeout={1000}>
                <Grid item xs={12} className={classes.root} >
                    <Grid item xs={12} className={classes.wrapper}>
                        { desktop ? <div></div> : <Textfit mode="single" >{desktop ? 'SOCCER' : 'Soccer' }</Textfit> }
                        <div className={classes.text}>
                            Due to my ACL injury, my passion for this game transformed into coaching positions at a David Douglas High School and Portland State University.
                            <Button linkTo='/resume' name='Resume' />
                        </div>
                        { desktop ? <div className={classes.header}><Textfit mode="multi" >SOCCER</Textfit></div> : null }
                    </Grid>
                </Grid>
            </Fade>
        </Visibility>
    )
};

export default Soccer;