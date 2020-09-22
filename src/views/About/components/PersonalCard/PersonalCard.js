import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//IMAGE
import Me from '../../../../assets/me.png'

//ICONS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        background: `url(` + Me + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        height: '100%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(93,223,253, 0.6)',
        color: 'black',
        fontFamily: 'Cinzel, serif',
        minHeight: 'calc(100vh - 50px)',
        height: '100%'
    },
    intro: {
        fontSize: 30,
        fontWeight: 700,
        paddingTop: 230
    },    
    introInfo: {
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center'
    },
    links: {
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}))

const PersonalCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.intro}>Hey, I'm Illia.</div>
                <div className={classes.introInfo}>full-stack developer from Portland, OR</div>
                <Link to='/contact' style={{textDecoration: 'none'}}>
                    <Button variant='contained' color='primary'>GET IN TOUCH</Button>
                </Link>
                <div className={classes.links}>
                    <IconButton href='https://github.com/gmillia' target='_blank'>
                        <GitHubIcon fontSize='small'/>
                    </IconButton>
                    <IconButton href='https://www.linkedin.com/in/illia-shershun/' target='_blank'>
                        <LinkedInIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
};

export default PersonalCard;