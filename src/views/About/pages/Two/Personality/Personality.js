import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Components
import { BackgroundImage, Foreground } from '../../../../../components';

//Bacgkround
import Analytics from '../../../../../assets/skills/analytics.jpeg';
import Leadership from '../../../../../assets/skills/leadership.jpeg';
import Organization from '../../../../../assets/skills/organization.jpeg';
import Communication from '../../../../../assets/skills/communication.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    row: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
    qualityWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        display: 'table',
        width: 'auto',
        fontWeight: 700,
        letterSpacing: 2,
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            display: 'inline-block',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
        }
    },
}))

const Personality = () => {
    const classes = useStyles();

    const column = (background, text) => {
        return (
            <Grid item xs={12} sm={6} >
                {
                    background ? 
                        <BackgroundImage background={background} minHeight={200}>
                            <Foreground align="center" justify="center" transformText={true} >
                            {text}
                            </Foreground>
                        </BackgroundImage>
                        : null
                }
            </Grid> 
        )
    }

    const row = (rowNumber, background, text) => {
        const contentOnLeft = rowNumber % 2 !== 0;
        console.log(contentOnLeft)
        return (
            <Grid item xs={12} className={classes.row}>
                { contentOnLeft ?  column(background, text) : column()}
                { !contentOnLeft ? column(background, text) : column()}
            </Grid>
        )
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <div className={classes.header}>PERSONALITY</div>
            <Grid item xs={12} className={classes.wrapper} >
                {row(1, Analytics, 'Analytics')}
                {row(2, Leadership, 'Leadership')}
            </Grid>
            <Grid item xs={12} className={classes.wrapper} >
                {row(3, Organization, 'Organization')}
                {row(4, Communication, 'Communication')}
            </Grid>
        </Grid>
    )
};

export default Personality;