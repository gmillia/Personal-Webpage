import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//IMAGE
import Me from '../../../../assets/me.png'
import Me2 from '../../../../assets/me2.png'

//ICONS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        background: props => props.introductory ? `url(` + Me + `) no-repeat center` : `url(` + Me2 + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
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
        height: '100%',
        transitionDuration: '0.5s, 0.5s',
        '&:hover': {
            backgroundColor: 'rgba(93,223,253, 0.3)',
            color: 'white'
        }
    },
    intro: {
        fontSize: 30,
        fontWeight: 700,
        paddingTop: 230,
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

const PersonalCard = ({ introductory=true }) => {
    const classes = useStyles({introductory: introductory});

    return (
        <div className={classes.root}>
            {
                introductory ? 
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
                    :
                    <div className={classes.wrapper} />
            }
        </div>
    )
};

export default PersonalCard;