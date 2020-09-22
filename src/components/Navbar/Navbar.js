import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //background: props => props.atHome ? 'black' : '#ECEBF3',
        background: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 10
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        border: 'none',
        color: 'lightgrey',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 14,
        fontFamily: 'Raleway, sans-serif',
        background: 'none',
        cursor: 'pointer',
        outline: 'none'
    },
    selected: {
        color: 'white',
        fontWeight: 600
    }
}))

const Navbar = () => {
    const [selected, setSelected] = useState();
    const classes = useStyles({atHome: selected !== undefined &&  (selected === '' || selected === 'home')});

    //Need to setup initial by looking at the url
    useEffect(() => {
        let url = window.location.pathname;
        let view = url.split('/')[1];
        setSelected(view)
    })

    return (
        <div className={classes.root}>
            <Link to="/" className={classes.link}>
                <button className={clsx(classes.button, selected === '' || selected === 'home' ? classes.selected : '')}>HOME</button>
            </Link>
            <Link to="/about" className={classes.link}>
                <button className={clsx(classes.button, selected === 'about' ? classes.selected : '')}>ABOUT</button>
            </Link>
            <Link to="/portfolio" className={classes.link}> 
                <button className={clsx(classes.button, selected === 'portfolio' ? classes.selected : '')}>PORTFOLIO</button>
            </Link>
            <Link to='/resume' className={classes.link}>
                <button className={clsx(classes.button, selected === 'resume' ? classes.selected : '')}>RESUME</button>
            </Link>
            <Link to="/contact" className={classes.link}>
                <button className={clsx(classes.button, selected === 'contact' ? classes.selected : '')}>CONTACT</button>
            </Link>
        </div>
    )
};

export default Navbar;