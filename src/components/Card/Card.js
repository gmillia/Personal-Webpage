import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { Fade } from '@material-ui/core';

import { BackgroundImage, Visibility } from 'components';
import ExternalIcon from 'assets/portfolio/external.svg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        color: "white",
        padding: 15,
        fontFamily: 'Cinzel, serif',
        maxWidth: 400,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: 'linear-gradient(20deg, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.2) 65%, rgba(255,255,255,0.1) 65%)',
    },
    divider: {
        minHeight: 350,
        background: 'linear-gradient(160deg, rgba(0,0,0,0.01) 50%, black 50%)',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 150
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    linkBox: {
        height: 100,
        width: 100,
        background: '#1e1f22',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: '300ms',
        '&:hover': {
            background: '#282a2e'
        }
    },
    cardContent: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    contentHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        paddingBottom: 20,
        textAlign: 'center'
    },
    contentDescription: {
        display: 'flex',
        fontSize: 18,
        textAlign: 'center',
        minHeight: 75,
        color: "rgba(255,255,255,0.5)"
    },
    stack: {
        display: 'flex',
        alignItems:"center",
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 10
    },
    stackIcon: {
        padding: 3
    }
}));

const Card = ({ name='Project Name', linkTo='/', description='Project Description', image, stack=[] }) => {
    const classes = useStyles();

    return (
        <Visibility>
            <Fade in={true} timeout={1000}>
                <Grid item xs={12} className={classes.root}>
                    <BackgroundImage background={image} minHeight={630}>
                        <Grid item xs={12} className={classes.wrapper}>
                            <Grid item xs={12} className={classes.divider}>
                                <Grid item xs={12} className={classes.link} >
                                    <a href={linkTo} target='_blank' rel="noopener noreferrer">
                                        <Grid item className={classes.linkBox}>
                                            <img src={ExternalIcon} alt=' ' width='30' height='30' />
                                        </Grid>
                                    </a>
                                </Grid>
                                <Grid item xs={12} className={classes.cardContent}>
                                    <Grid item xs={12} className={classes.contentHeader} > {name} </Grid>
                                    <Grid item xs={12} className={classes.contentDescription} > {description} </Grid>
                                    <Grid item xs={12} className={classes.stack}>
                                        {
                                            stack.map((icon, index) => {
                                                return <img key={index} src={icon} alt=' ' width='25' height='25' className={classes.stackIcon} />
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </BackgroundImage>
                </Grid>
            </Fade>
        </Visibility>
    )
};  

export default Card;