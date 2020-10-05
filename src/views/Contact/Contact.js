import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import clsx from 'clsx'
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import EmailIcon from 'assets/email.svg'
import PhoneIcon from 'assets/phone.svg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'initial',
        justifyContent: 'center',
        minHeight: theme.page.height,
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            alignItems: 'center'
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 30,
        background: 'rgba(255,255,255,0.1)',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '70%',
            minHeight: 600,
            padding: '25px 100px 25px 100px',
            alignItems: 'center',
        }
    },
    subWrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bottomRow: {
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 50
        }

    },
    greeting: {
        paddingBottom: 50,
        [theme.breakpoints.up('sm')]: {
            paddingBottom: 0,
            paddingRight: 25
        }
    },
    header: {
        fontSize: 35,
        lineHeight: 0.9,
    },
    description: {
        paddingTop: 10
    },
    name: {
        [theme.breakpoints.up('sm')]: {
            marginRight: 15
        }
    },
    inputStyle: {
        paddingBottom: 6,
        paddingTop: 10,
        fontSize: 14,
        color: 'white'
    },
    inputLabel: {
        color: "white"
    },
    underline: {
        '&:before': { //underline color when textfield is inactive
            borderBottom: `1px solid white`,
        },
        '&:hover:not($disabled):hover:before': { //underline color when hovered 
            borderBottom: `2px solid white`,
        },
    },
    nameInput: {
        [theme.breakpoints.up('sm')]: {
            paddingRight: 15
        }
    },
    inputRow: {
        paddingBottom: 35,
        [theme.breakpoints.up('sm')]: {
            paddingBottom: 0,
            '&:nth-child(3)': {
                paddingTop: 15
            }
        }
    }
}))

const Contact = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const contact = (icon, text, link) => {
        const contactRoot = {
            display: 'flex',
            flexDirection: 'row',
            padding: '10px 0px 0px 0px',
            textDecoration: 'none',
            color: 'white'
        }

        const imageStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 10
        }

        return (
            <a href={link} style={contactRoot}>
                <div style={imageStyle}>
                    <img src={icon} alt=' ' width='15' height='15' />
                </div>
                {text}
            </a>
        )
    }

    const contacts = () => {
        const contactsStyle = {
            display: 'flex',
            flexDirection: 'column',
            paddingTop: desktop ? 0 : 15,
            fontSize: 14
        }

        return (
            <Grid item xs={12} sm={5} style={contactsStyle} >
                {contact(EmailIcon, 'illiashershun@gmail.com', 'mailto:illiashershun.gmail.com')}
                {contact(PhoneIcon, '(503)-995-1757', 'tel:15039951757')}
            </Grid>
        )
    }

    const send = () => {
        return (
            <Grid item xs={12} sm={7} style={{display: 'flex', alignSelf: 'flex-end'}} >
                <Button variant='contained' typeof="submit" color='primary' style={{width: desktop ? 'auto' : '100%'}} >{ desktop ? 'Send' : 'Send Message' }</Button>
            </Grid>
        )
    }

    const input = (id, name, placeholder) => {
        return (
            <Grid item xs={12}>
                <InputLabel 
                    htmlFor={id} 
                    style={{fontWeight: 700}} 
                    classes={{root: classes.inputLabel }} 
                >
                    {name}
                </InputLabel>

                <Input 
                    name={id} 
                    placeholder={placeholder} 
                    id={id} 
                    inputProps={{ 'aria-label': {placeholder} }} 
                    required={true} 
                    type={id === 'email' ? id : "text"} 
                    fullWidth={true} 
                    classes={{input: classes.inputStyle, underline: classes.underline }} 
                />
            </Grid>
        )
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
                <form action='https://usebasin.com/f/0c583a97953c' method='POST' className={classes.subWrapper} >
                    <Grid item xs={12} className={classes.row}>
                        <Grid item xs={12} sm={5} className={classes.greeting}>
                            <div className={classes.header}>Let's collaborate</div>
                            <div className={classes.description}>Get in touch with me</div>
                        </Grid>
                        <Grid item xs={12} sm={7} className={classes.row}>
                            <Grid item xs={12} sm={4} className={clsx(classes.nameInput, classes.inputRow)} >
                                {input('name', 'Name', 'Your name')}
                            </Grid>
                            <Grid item xs={12} sm={8} className={classes.inputRow}>
                                {input('email', 'Email', 'Email address')}
                            </Grid>
                            <Grid item xs={12}  className={classes.inputRow} >
                                {input('message', 'Message', 'Start typing here')}
                            </Grid>
                        </Grid>
                    </Grid>
                    {
                        desktop ? 
                        <Grid item xs={12} className={clsx(classes.bottomRow)}>
                            {contacts()}
                            {send()}
                        </Grid>
                        :
                        <Grid item xs={12} className={clsx(classes.bottomRow)}>
                            {send()}
                        </Grid>
                    }
                </form>
            </Grid>
        </Grid>
    )
};

export default Contact;