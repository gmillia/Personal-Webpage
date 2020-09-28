import React from 'react';

/**
 * Empty component for Visibility wrapper. For some reason, when elements have no width/height, they're no detected with visibility. 
 */
const FakeEmpty = () => {
    return (
        <div style={{minHeight: 1, minWidth: 1}}></div>
    )
}

export default FakeEmpty;