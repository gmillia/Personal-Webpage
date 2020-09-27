import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        display: 'flex',
        alignItems: props => props.align,
        justifyContent: props => props.justify,
        background: props => props.dark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)',
        color: props => props.dark ? 'white' : 'black',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
        fontWeight: 500
    },
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Foreground = ({ children, align='flex-start', justify='flex-start', dark=true }) => {
    const classes = useStyles({align: align, justify: justify, dark: dark});

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Foreground;