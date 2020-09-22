import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 15
    },
    imageWrapper: {
        border: '1px solid #a9def9',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white'
    },
    infoWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-startr',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        paddingLeft: 15,
        paddingRight: 5
    },
    header: {
        fontSize: 28,
        color: 'white'
    },
    text: {
        paddingTop: 5
    }
}))

const EducationCard = ({ icon, header, text }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.imageWrapper}>
                <img src={icon} alt=' ' width='64' height='64' />
            </div>
            <div className={classes.infoWrapper}>
                <div className={classes.header}>
                    {header}
                </div>
                <div className={classes.text}>
                    {text}
                </div>
            </div>
        </div>
    )
};

export default EducationCard;