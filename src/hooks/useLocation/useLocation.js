import React, { useEffect, useState } from 'react'

const useLocation = () => {
    const [location, setLocation] = useState(window.location.hash);

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setLocation(window.location.hash);
        })

        return () => { window.removeEventListener('hashchange', () => {}) }
    }, [location])

    return location;
}

export default useLocation;