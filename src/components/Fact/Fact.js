import React from 'react';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5,
        padding: 15,
        background: 'rgba(255,255,255,0.1)',
        border: '1px solid rgba(0,0,0,0.5)',
        minWidth: props => (55-props.index),
        maxWidth: props => (95+props.index),
        minHeight: props => (130-props.index),
        maxHeight: props => (250-props.index),
        cursor: 'pointer',
        transition: "0.3s, 0.3s",
        fontSize: 18,
        '&:hover': {
            background: 'rgba(255,255,255,0.3)',
        }
    },
    factWrapper: {
        paddingLeft: 10,
        color: 'white',
        fontSize: 20
    }
}))

const Fact = ({ fact, index }) => {
    const classes = useStyles({index: index});

    return (
        <div className={classes.root}>
            {fact}
        </div>
    )
};

export default Fact;