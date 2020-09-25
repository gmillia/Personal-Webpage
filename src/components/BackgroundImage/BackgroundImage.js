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
        width: '100%',
        height: '100%',

    },
}))

const BackgroundImage = ({ background, children}) => {
    const classes = useStyles({background: background });

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default BackgroundImage;