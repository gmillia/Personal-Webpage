import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';
import { Textfit } from 'react-textfit';

//COMPONENTS
import { Page, Visibility } from 'components'
import { Content } from './Content';
import { Contact } from './Contact';
import { Links } from './Links';

//Images
import Background from 'assets/abstract.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: "white",
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0.5) 50%)',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    leftWrapper: {
        display: 'flex',
    },
    rightWrapper: {
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(0,0,0,0.5)',
        padding: 30,
    },
    contentWrapper: {
        display: 'flex', 
        alignItems: 'flex-end'      
    },
    contactWrapper: {
        display: 'flex',
        alignItems: 'flex-end'
    },
})) 

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Page background={Background} useBackground={true} darken={false} >
            <Grid item xs={12}><Textfit mode="single" max={1000} >ILLIA</Textfit></Grid>
            <Grid item xs={12}></Grid>
        </Page>
        /*
        <Page background={Background} useBackground={true} darken={false} >
            <Grid item xs={12} className={classes.root}>
                <Visibility >
                    <Slide in={true} timeout={2000} direction="right" >
                        <Grid item xs={12} sm={6} className={classes.rightWrapper} >
                            <Grid item xs={12} className={classes.contentWrapper} ><Content /></Grid>
                            <Grid item xs={12} className={classes.contactWrapper} ><Contact /></Grid>
                        </Grid>
                    </Slide>
                </Visibility>
                <Grid item xs={12} sm={6} className={classes.leftWrapper} >

                </Grid>
            </Grid>
        </Page>
        */
    )
};

export default Home;