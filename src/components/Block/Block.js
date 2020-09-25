import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {

    }
}))

const Block = ({ children, direction='row' }) => {
    const classes = useStyles({ direction: direction });

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Block;