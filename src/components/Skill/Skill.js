import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        background: props => `url(` + props.background + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        flex: 'auto',
        height: 'calc((' + theme.page.height + ' - 45px) / 4)',
        width: '100%'
    },
    wrapper: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: 'white',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
        transitionDuration: '0.5s, 0.5s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: 'black',
            fontSize: 35
        }
    },
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Skill = ({ name, icon,  }) => {
    const classes = useStyles({background: icon});

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            {name}
            </div>
        </div>
    )
};

export default Skill;