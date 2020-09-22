import React from 'react';

//Skill component
import { Skill } from '../../../../components';

//ICONS
import BootstrapIcon from '../../../../assets/bootstrap.svg';
import CIcon from '../../../../assets/c.svg';
import CssIcon from '../../../../assets/css.svg';
import GithubIcon from '../../../../assets/github.svg';
import HtmlIcon from '../../../../assets/html.svg';
import JavaIcon from '../../../../assets/java.svg';
import JavascriptIcon from '../../../../assets/javascript.svg';
import MysqlIcon from '../../../../assets/mysql.svg';
import NodeIcon from '../../../../assets/nodejs.svg';
import PythonIcon from '../../../../assets/python.svg';
import ReactIcon from '../../../../assets/react.svg';
import SkillIcon from '../../../../assets/skill.svg';

//Skill data
const skills = ['JavaScript', 'Python', 'Java', 'C++', 'C', 'React', 'HTML', 'SQL', 'No SQL', 'Bootstrap', 'CSS', 'Git', 'GCP', 'Firebase', 'jQuery' ]

/**
 * Helper function which returns svg Icon based on the name of the skill
 * @param {String} name name of the skill
 */
const getIcon = (name) => {
    switch(name.toUpperCase()) {
        case 'BOOTSTRAP': return BootstrapIcon;
        case 'C': case 'C++': return CIcon;
        case 'CSS': return CssIcon;
        case 'GIT': case 'GITHUB': return GithubIcon;
        case 'HTML': return HtmlIcon;
        case 'JAVA': return JavaIcon;
        case 'JS': case 'JAVASCRIPT': return JavascriptIcon;
        case 'MYSQL': case 'SQL': return MysqlIcon;
        case 'NODE': return NodeIcon;
        case 'PYTHON': return PythonIcon;
        case 'REACT': return ReactIcon;
        default: return SkillIcon;
    }
}

/**
 * Component which creates and returns skills
 */
const Skills = () => {
    return (
        skills.map((skillName, index) => {
            return <Skill key={index} name={skillName} icon={getIcon(skillName)} />
        })
    )
};

export default Skills;