import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//ICONS
import EnglishIcon from '../../../../assets/languages/english.jpg';
import RussianIcon from '../../../../assets/languages/russian.png';
import UkrainianIcon from '../../../../assets/languages/ukrainian.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    wrapper: {
        background: 'rgba(130,106,237, 0.3)',
        flex: 1,
        display: 'flex',
        flexFlow: 'row wrap',
    },
    name: {
        width: '100%',
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        color: "white",
        textAlign: 'center',
        textDecoration: 'underline',
        paddingBottom: 16,
        [theme.breakpoints.up('sm')]: {
            transform: 'rotate(360deg)',
            writingMode: 'vertical-rl',
            textAlign: 'end',
            paddingBottom: 0,
            paddingLeft: 16,
            width: 'auto'
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

    }, 
}))

const Languages = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root} >
            <Grid container spacing={0} className={classes.wrapper}>
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
            <Grid className={classes.name}>LANGUAGES</Grid>
        </Grid>
    )
};

export default Languages;