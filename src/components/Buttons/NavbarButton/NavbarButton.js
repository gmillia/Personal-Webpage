import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',

    },
    button: {
        border: 'none',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        fontFamily: 'Raleway, sans-serif',
        background: 'none',
        cursor: 'pointer',
        outline: 'none',
    },
    text: {
        color: 'lightgrey',
        fontSize: 14,
        fontWeight: 400,
        paddingBottom: 2,
    },
    selected: {
        color: 'white',
        fontWeight: 600,
        borderBottom: '1px solid white'
    }
}))

const Button = ({
    classes,
    isSelected=false,
    name
}) => {
    return (
        <button className={classes.button}>
            <span className={clsx(classes.text, isSelected ? classes.selected : '')}>
                {name}
            </span>
        </button>
    )
}

/**
 * Component which creates button to be used in the navbar
 * @param {String} linkTo link to whcih user will be taken upon clickin on the button
 * @param {String} name name displayed in the button
 * @param {Boolean} isSelected specifies whether thus button is currently selected
 */
const NavbarButton = ({ linkTo, name, isSelected=false }) => {
    const classes = useStyles();

    return (
        name.toUpperCase() === 'RESUME'
        ? 
        <a className={classes.link} href={linkTo} target='_blank'>
            <Button classes={classes} name={name} />
        </a>
        : 
        <Link to={linkTo} className={classes.link}>
            <Button classes={classes} isSelected={isSelected} name={name} />
        </Link>
    )
};

export default NavbarButton;