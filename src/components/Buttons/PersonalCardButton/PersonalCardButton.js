import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none'
    },
    button: {
        border: '1px solid rgba(255,255,255,0.5)',
        color: 'lightgrey',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontFamily: 'Raleway, sans-serif',
        background: 'none',
        cursor: 'pointer',
        outline: 'none',
        transition: '0.3s, 0.3s',
        '&:hover': {
            border: '1px dashed',
            letterSpacing: 1,
            paddingLeft: 45,
            paddingRight: 45,
            background: "rgba(255,255,255,0.1)"
        }
    },
}))


const PersonalCardButton = ({ linkTo, name }) => {
    const classes = useStyles();

    return (
        <Link to={linkTo} className={classes.link}>
            <button className={classes.button}>{name}</button>
        </Link>
    )
};

export default PersonalCardButton;