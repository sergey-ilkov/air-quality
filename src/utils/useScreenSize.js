import {useEffect, useState} from 'react';

const useScreenSize = () => {
    const [size, setSize] = useState({...window.screen});
    
    useEffect(() => {
        const handLeResize = () => setSize(...window.screen);
        window.addEventListener('resize', handLeResize);
        return window.removeEventListener('resize', handLeResize);
    }, []);

    return size;
};

export default useScreenSize;
