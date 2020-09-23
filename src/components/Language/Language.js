import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        background: props => `url(` + props.background + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        height: 150,
        minWidth: 200,
        color: 'black'
    },
    wrapper: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
    },
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Language = ({ name, icon,  }) => {
    const classes = useStyles({background: icon});

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
            {name}
            </div>
        </div>
    )
};

export default Language;