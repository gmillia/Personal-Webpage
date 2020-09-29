import React from 'react';
import { AnimateGroup, Animate } from 'react-simple-animate';

/**
 * 
 * @param {Array} textArray array of letters 
 * @param {String} direction specifies where the letters will be falling from (which side)
 */
const AnimateText = ({ textArray=[], direction='top' }) => {
    return (
        <AnimateGroup play>
            {
                textArray.map((item, index) => {
                    return (
                        <Animate
                            key={index}
                            sequenceIndex={index}
                            end={{ opacity: 1, transform: 'translateY(0), translateX(10px)' }}
                            start={{ opacity: 0, transform: 'translateY(0)' }}
                            duration={0.1}
                        >
                        {item}
                        </Animate>
                    )
            })}
        </AnimateGroup>
    )
};

export default AnimateText;