import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: "100%",
        display: 'flex',
        alignItems: props => props.align,
        justifyContent: props => props.justify,
        flexFlow: 'row wrap',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        fontFamily: 'Cinzel, serif',
        fontSize: 25,
        [theme.breakpoints.up('sm')]: {
            writingMode: props => props.transformText ? 'vertical-rl' : 'normal',
            transform: props => props.transformText ? 'rotate(180deg)' : '',
        }
    },
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Foreground = ({ children, align='flex-start', justify='flex-start', transformText=false }) => {
    const classes = useStyles({align: align, justify: justify, transformText: transformText});

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Foreground;