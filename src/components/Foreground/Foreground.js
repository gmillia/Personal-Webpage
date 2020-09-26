import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: "100%",
        display: 'flex',
        flexFlow: 'row wrap',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
        transitionDuration: '0.5s, 0.5s',
        '&:hover': {
            backgroundColor: props => props.addEffect ? 'rgba(0,0,0,0.3)' : '',
            color: props => props.addEffect ? 'lightgrey' : '',
            fontSize: props => props.addEffect ? 35 : '',
        }
    },
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Foreground = ({ text, children, addEffect=false }) => {
    const classes = useStyles({ addEffect: addEffect });

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Foreground;