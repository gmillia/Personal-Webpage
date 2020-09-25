import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
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
        outline: 'none',
        fontWeight: 400
    },
    selected: {
        color: 'white',
        fontWeight: 600
    }
}))

/**
 * Component which creates button to be used in the navbar
 * @param {String} linkTo link to whcih user will be taken upon clickin on the button
 * @param {String} name name displayed in the button
 * @param {Boolean} isSelected specifies whether thus button is currently selected
 */
const NavbarButton = ({ linkTo, name, isSelected }) => {
    const classes = useStyles();

    return (
        <Link to={linkTo} className={classes.link}>
            <button className={clsx(classes.button, isSelected ? classes.selected : '')}>{name}</button>
        </Link>
    )
};

export default NavbarButton;