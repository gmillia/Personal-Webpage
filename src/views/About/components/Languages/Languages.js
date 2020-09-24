import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//ICONS
import EnglishIcon from '../../../../assets/languages/english.jpg';
import RussianIcon from '../../../../assets/languages/russian.png';
import UkrainianIcon from '../../../../assets/languages/ukrainian.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 15,
        height: '100%',
        flex: 1
    },
    wrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        background: 'rgba(130,106,237, 0.3)',
        padding: 15
    },
    name: {
        fontSize: 37,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        color: "white",
        [theme.breakpoints.up('sm')]: {
            transform: 'rotate(360deg)',
            writingMode: 'vertical-rl',
        },
    },
    content: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    flag: {
        opacity: '0.7',
        maxWidth: 250,
        display: 'flex',
        alignItems: 'flex-start',
        "&:nth-child(2)":{
            paddingTop: 15,
            paddingBottom: 15
        },
    }, 
    middle: {
        paddingTop: 15,
        paddingBottom: 15
    }
}))

const Languages = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root} >
            <Grid container spacing={0} className={classes.wrapper}>
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
        </Grid>
    )
};

export default Languages;