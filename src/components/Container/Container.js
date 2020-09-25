import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: props => props.direction,
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            flexWrap: 'nowrap'
        }
    }
}))

const Container = ({ children, direction='row' }) => {
    const classes = useStyles({ direction: direction });

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Container;
