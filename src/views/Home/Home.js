import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//COMPONENTS
import { Page } from '../../components'
import { Content } from './Content';
import { Contact } from './Contact';
import { Links } from './Links';

//Images
import Abstract from '../../assets/abstract.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: "flex-start",
        width: '100%',
        height: "100%",
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'flex-end',
            alignContent: "flex-end",
        }
    },
    leftWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        color: 'white',
        maxWidth: '100%',
        padding: 30,
        flex: 1,
        [theme.breakpoints.up('sm')]: {
            maxWidth: '50%',
        }
    },
    rightWrapper: {
        color: "white",
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        flexFlow: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 30,
        flex: 1,
        [theme.breakpoints.up('sm')]: {
            flexFlow:"column",
            minHeight: '100%',
            width: '100%',
            borderLeft: '2px solid rgba(255,255,255,0.2)',
        }
    },
    contentWrapper: {
        display: 'flex',
        width: '100%',
        minHeight: '60%',
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-end'
        }
    },
    contactWrapper: {
        display: 'flex',
        width: '100%',
        flex: 1,
        paddingTop: '100%',
        [theme.breakpoints.up('sm')]: {
            alignItems: 'flex-end',
            paddingTop: 0
        }
    },
})) 

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const leftAndBottom = () => {
        return (
            <Grid item xs={12} sm={6} className={classes.leftWrapper}>
                <Links />
            </Grid>
        )
    }

    const rightAndTop = () => {
        return (
            <Grid item xs={12} sm={6} className={classes.rightWrapper}>
                <Grid className={classes.contentWrapper}>
                    <Content />
                </Grid>
                <Grid className={classes.contactWrapper}>
                    <Contact />
                </Grid>
            </Grid>
        )
    }

    return (
        <Page background={Abstract}>
        {
            desktop ? 
                <Grid container spacing={0} className={classes.root}>
                    {leftAndBottom()}
                    {rightAndTop()}
                </Grid>
                :
                <Grid container spacing={0} className={classes.root}>
                    {rightAndTop()}
                    {leftAndBottom()}
                </Grid>
        }
        </Page>
    )
};

export default Home;