import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx'

//Local components
import { Languages } from './Languages';
import { Personal } from './Personal';
import { Skills } from './Skills';
import { Projects } from './Projects';

//Global components
import { Page } from '../../../../components'

//Background image
import AboutOne from '../../../../assets/aboutOne.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    topWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        height: 'auto',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            height: 'auto'
        }
    },
    bottomWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        height: 'auto',
        width: '100%',
        background: 'rgba(0,0,0,0.5)',
        padding: 30,
        flex: 1,
        [theme.breakpoints.up('sm')]: {
            height: 'auto'
        }
    },
    contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    bottomHeaderWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        fontSize: 24,
        paddingBottom: 25,
        justifyContent: "flex-start",
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 105,
        }
    },
}))

/**
 * Page one of the about page
 */
const One = () => {
    const classes = useStyles();

    const topContent = () => {
        return (
            <Grid item xs={12} className={classes.topWrapper}>
                <Grid item xs={12} sm={6} className={classes.contentWrapper}>
                    <Languages />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.contentWrapper}>
                    <Personal />
                </Grid>
            </Grid>
        )
    }

    const bottomContent = () => {
        return (
            <Grid item xs={12} className={classes.bottomWrapper} >
                <Grid item xs={12} sm={8} className={classes.skillsWrapper}>
                    <Skills />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.projectsWrapper}>
                    <Projects />
                </Grid>
            </Grid>
        )
    }

    return (
        <Page full={true} background={AboutOne} useBackground={true} >
            <Grid item xs={12} className={classes.root}>
            {topContent()}
            {bottomContent()}
            </Grid>
        </Page>
    )
};

export default One;