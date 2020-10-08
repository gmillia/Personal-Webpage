import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

//Components
import { Navbar } from '../../Navbar';
import { NavbarButton } from '../../Buttons';

const useStyles = makeStyles(theme => ({
    logo: {
        fontSize: 30,
        color: 'white',
        width: '25%',
        cursor: 'pointer',
        textDecoration: 'none'
    }
}))

const Desktop = ({ options=[], selected='' }) => {
    const classes = useStyles();

    return (
        <Navbar>
            <Link to='/' className={classes.logo}>
                IS
            </Link>
        {
            options.map((option, index) => {
                return <NavbarButton key={index} linkTo={option.path} name={option.name} isSelected={selected === option.path} />
            })
        }
        </Navbar>
    )
};

export default Desktop;