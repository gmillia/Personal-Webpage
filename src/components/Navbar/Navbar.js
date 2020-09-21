import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(them => ({
    root: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent'
    }
}))

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Portfolio</Button>
            <Button>Resume</Button>
            <Button>Contact</Button>
        </div>
    )
};

export default Navbar;