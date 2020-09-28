import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

//Icon
import RightArrow from '../../../assets/rightArrow.svg'

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row wrap',
        paddingBottom: 1,
        paddingTop: 15,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 'auto'
        }
    },
    button: {
        color: "white",
        background: 'transparent',
        width: 'auto',
        border: 'none',
        outline: 'none',
        fontSize: 16,
        cursor: 'pointer',
        paddingBottom: 2,
        borderBottom: '1px solid white',
        display: 'flex',
        flexDirection: 'row wrap'
    },
    arrowWrapper: {
        paddingLeft: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
}));

const Underline = ({ linkTo='', name='' }) => {
    const classes = useStyles();

    return (
        <Link to={linkTo} className={classes.link}>
            <div className={classes.buttonWrapper}>
                <span className={classes.button}>
                    {name}
                    <div className={classes.arrowWrapper}>
                        <img src={RightArrow} alt=' ' width='15' height='15' />
                    </div>
                </span>
            </div>
        </Link>
    )
};  

export default Underline;