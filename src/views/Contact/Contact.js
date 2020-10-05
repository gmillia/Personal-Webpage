import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import clsx from 'clsx'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: theme.page.height,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        background: "rgba(255,255,255,0.8)",
        padding: 10,
        [theme.breakpoints.up('lg')]: {
            maxWidth: '70%',
            minHeight: 600,
            padding: '25px 100px 25px 100px'
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
        flexWrap: 'wrap'
    },
    bottomRow: {
        paddingTop: 75,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    greeting: {
        paddingBottom: 50,
        [theme.breakpoints.up('sm')]: {
            paddingBottom: 0
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
        paddingBottom: 2,
        paddingTop: 10,
        fontSize: 14,
    },
    nameInput: {
        paddingBottom: 15,
        [theme.breakpoints.up('sm')]: {
            paddingBottom: 0,
            paddingRight: 15
        }
    },
    contacts: {

    }
}))

const Contact = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
                <form action='https://usebasin.com/f/0c583a97953c' method='POST' className={classes.subWrapper} >
                    <Grid item xs={12} className={classes.row}>
                        <Grid item xs={12} sm={4} className={classes.greeting}>
                            <div className={classes.header}>Let's talk</div>
                            <div className={classes.description}>Get in touch with me</div>
                        </Grid>
                        <Grid item xs={12} sm={8} className={classes.row}>
                            <Grid item xs={12} sm={4} className={classes.nameInput} >
                                <InputLabel htmlFor="name" style={{fontWeight: 700}} >Name</InputLabel>
                                <Input className={classes.name} name='name' id="name" placeholder="Name" inputProps={{ 'aria-label': 'Name' }} required={true} fullWidth={true} classes={{input: classes.inputStyle }} />
                            </Grid>
                            <Grid item xs={12} sm={8} >
                                <InputLabel htmlFor="email" style={{fontWeight: 700}} >Email</InputLabel>
                                <Input name='email' placeholder="Email" id="email" inputProps={{ 'aria-label': 'Email' }} required={true} type="email" fullWidth={true} classes={{input: classes.inputStyle }} />
                            </Grid>
                            <Grid item xs={12} style={{paddingTop: 15}}>
                                <InputLabel htmlFor="message" style={{fontWeight: 700}} >Message</InputLabel>
                                <Input name='message' placeholder="Message" id="message" inputProps={{ 'aria-label': 'Message' }} fullWidth={true} required={true} classes={{input: classes.inputStyle }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={clsx(classes.bottomRow)}>
                        <Grid item xs={12} sm={4} className={classes.contacts} >

                        </Grid>
                        <Grid item xs={12} sm={8}>
                            {/*<button type='submit'>Submit</button>*/}
                            <Button variant='outlined' typeof="submit" color='primary' >Send</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default Contact;