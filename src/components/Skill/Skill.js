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
        height: 200,
        minWidth: 250,
        margin: 15,
        '&:nth-child(4n+1)': {
            width: 325
        }
    },
    wrapper: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: 'lightgrey',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
        transitionDuration: '0.5s, 0.5s',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: 'white',
            fontSize: 28
        }
    },
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Skill = ({ name, icon, isFirst }) => {
    const classes = useStyles({background: icon, isFirst: isFirst});

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            {name}
            </div>
        </div>
    )
};

export default Skill;