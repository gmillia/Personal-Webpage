import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//ICONS
import EnglishIcon from '../../../../assets/languages/english.jpg';
import RussianIcon from '../../../../assets/languages/russian.png';
import UkrainianIcon from '../../../../assets/languages/ukrainian.jpg';

//Skill component
import { Language } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        background: 'rgba(183, 151, 255, 0.5)',
        marginLeft: 15,
        marginRight: 15,
    },
    name: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100vh - 90px - 317px)',
            letterSpacing: 'calc(((100vh - 90px - 317px - 179px - 75px) / 8))',
            transform: 'rotate(360deg)',
            writingMode: 'vertical-rl',
        },
    },
    content: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        paddingLeft: 15
    },
    flag: {
        maxWidth: 250,
        height: 'calc((100vh - 90px - 317px - 30px) / 3)',
        display: 'flex',
        alignItems: 'flex-start',
        padding: 15,
    }
}))

const Languages = () => {
    const classes = useStyles();

    return (
        <Grid container item xs={12} spacing={0} alignItems='center' className={classes.root} >
            <Grid item xs={12} md={10} className={classes.content}>
                <Grid item xs={12} className={classes.flag}>
                    <img src={EnglishIcon} alt=' ' width='100%' height='100%' />
                </Grid>
                <Grid item xs={12} className={classes.flag}>
                    <img src={RussianIcon} alt=' ' width='100%' height='100%'/>
                </Grid>
                <Grid item xs={12} className={classes.flag}>
                    <img src={UkrainianIcon} alt=' ' width='100%' height='100%'/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} className={classes.name}>LANGUAGES</Grid>
        </Grid>
    )
};

export default Languages;