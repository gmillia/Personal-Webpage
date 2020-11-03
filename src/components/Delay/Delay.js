import React, { useEffect, useState } from 'react';

const Delay = ({ delayBy=0, children }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, delayBy)
    }, []);

    return show ? children : null;
};

export default Delay;