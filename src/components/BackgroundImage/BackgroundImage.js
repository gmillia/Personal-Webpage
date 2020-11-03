import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        background: props => `url(` + props.background + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        flex: 'auto',
        display: 'flex',
        width: '100%',
        height: '100%',
        minHeight: props => props.minHeight,
    },
}))

const BackgroundImage = ({ background, children, minHeight='auto'}) => {
    const classes = useStyles({background: background, minHeight: minHeight });

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default BackgroundImage;