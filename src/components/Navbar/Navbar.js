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
            <Link to="/">
                <Button>Home</Button>
            </Link>
            <Link to="/about">
                <Button>About</Button>
            </Link>
            <Link to="/portfolio">
                <Button>Portfolio</Button>
            </Link>
            <Button>Resume</Button>
            <Link to="/contact">
                <Button>Contact</Button>
            </Link>
        </div>
    )
};

export default Navbar;