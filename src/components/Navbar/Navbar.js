import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'black',
        position: 'sticky',
        top: 0
    },
    link: {
        textDecoration: 'none'
    }
}))

const Navbar = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState();

    //Need to setup initial by looking at the url
    useEffect(() => {
        console.log(1)
        let url = window.location.pathname;
        let view = url.split('/')[1];
        setSelected(view)
    })

    return (
        <div className={classes.root}>
            <Link to="/" className={classes.link}>
                <Button 
                    //variant={ (selected === '' || selected === 'home') ? 'outlined' : 'text'} 
                    color={(selected === '' || selected === 'home') ? 'secondary' : 'primary'}
                >
                    Home
                </Button>
            </Link>
            <Link to="/about" className={classes.link}>
                <Button 
                    //variant={selected === 'about' ? 'outlined' : 'text'} 
                    color={selected === 'about' ? 'secondary' : 'primary'} 
                >
                    About
                </Button>
            </Link>
            <Link to="/portfolio" className={classes.link}> 
                <Button
                    //variant={selected === 'portfolio' ? 'outlined' : 'text'} 
                    color={selected === 'portfolio' ? 'secondary' : 'primary'} 
                >
                    Portfolio
                </Button>
            </Link>
            <Button>Resume</Button>
            <Link to="/contact" className={classes.link}>
                <Button
                    //variant={selected === 'contact' ? 'outlined' : 'text'} 
                    color={selected === 'contact' ? 'secondary' : 'primary'} 
                >
                    Contact
                </Button>
            </Link>
        </div>
    )
};

export default Navbar;