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
    skillRoot: {
        width: 100,
        height: 100,
        padding: 15
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    name: {
        color: 'white',
        fontSize: 25
    },
    row: {
        display: 'flex'
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
            <Grid item xs={12} className={classes.wrapper}>
                <Grid className={classes.row}>
                    {skill(ReactIcon)}
                    {skill(PythonIcon)}
                    {skill(CPlusPlusIcon)}
                </Grid>
            </Grid>  
        </Grid>
    )
};  

export default Skills;