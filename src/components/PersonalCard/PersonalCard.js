import React from 'react';
import { makeStyles } from "@material-ui/styles";

//Component
import { PersonalCardButton as Button } from '../../components';

//IMAGE
import Me from '../../assets/me.png'
import Me2 from '../../assets/me2.png'

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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(4,5,46, 0.5)',
        color: 'white',
        fontFamily: 'Cinzel, serif',
        transitionDuration: '0.5s, 0.5s',
        fontSize: 30, 
        fontWeight: 700,
        '&:hover': {
            background: 'none',
            color: 'lightgrey',
            fontSize: 40
        }
    },
    intro: {
        paddingTop: 230,
    },    
    introInfo: {
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 25,
        textAlign: 'center'
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
                        <Button name='GET IN TOUCH' linkTo='/contact' />
                    </div>
                    :
                    <div className={classes.wrapper} />
            }
        </div>
    )
};

export default PersonalCard;