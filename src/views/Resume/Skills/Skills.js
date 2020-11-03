import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { BackgroundImage } from 'components';

//Stack icons
import ReactIcon from 'assets/skills/react.png';
import NodeIcon from 'assets/skills/node.png';
import CSSIcon from 'assets/skills/css.png';
import MongoIcon from 'assets/skills/mongodb.png';
import ReduxIcon from 'assets/skills/redux.svg';
import PythonIcon from 'assets/skills/python.svg';
import DockerIcon from 'assets/skills/docker.png';
import SQLIcon from 'assets/skills/sql.svg';
import MLIcon from 'assets/skills/ml.svg';
import CPlusPlusIcon from 'assets/skills/c++.png';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    skillRoot: {
        width: 75,
        height:75,
        padding: 15,
        background: 'rgb(230,230,230)',
        margin: 15,
        '&:nth-child(1n)': {
            marginLeft: 0,
        },
        [theme.breakpoints.up('sm')]: {
            margin: '0px 15px 15px 0px',
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 0
    }
}));

const Skills = () => {
    const classes = useStyles();

    const skill = (icon) => {
        return (
            <div className={classes.skillRoot}>
                <BackgroundImage background={icon} useBackground={true} />
            </div>
        )
    }

    return (
        <Grid item xs={12} className={classes.root} >
            {skill(ReactIcon)}
            {skill(PythonIcon)}
            {skill(CPlusPlusIcon)}
            {skill(ReactIcon)}
            {skill(PythonIcon)}
            {skill(CPlusPlusIcon)}
        </Grid>
    )
};  

export default Skills;