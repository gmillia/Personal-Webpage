import React from 'react';

//Skill component
import { Skill } from '../../../../components';

//ICONS
import AnalyticsIcon from '../../../../assets/analytics.svg';
import LeadershipIcon from '../../../../assets/leadership.svg';
import OrganizationIcon from '../../../../assets/organization.svg';
import CollaborationIcon from '../../../../assets/collaboration.svg';
import SkillIcon from '../../../../assets/skill.svg';

//data
const skills = ['Analytics', 'Leadership', 'Organization', 'Collaboration']

/**
 * Helper function which returns svg Icon based on the name of the skill
 * @param {String} name name of the skill
 */
const getIcon = (name) => {
    switch(name.toUpperCase()) {
        case 'ANALYTICS': return AnalyticsIcon;
        case 'LEADERSHIP': case 'GITHUB': return LeadershipIcon;
        case 'ORGANIZATION': return OrganizationIcon;
        case 'COLLABORATION': return CollaborationIcon;
        default: return SkillIcon;
    }
}

const Individual = () => {
    return (
        skills.map((skillName, index) => {
            return <Skill key={index} name={skillName} icon={getIcon(skillName)} />
        })
    )
};

export default Individual;