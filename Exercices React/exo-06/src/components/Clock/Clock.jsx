import { useEffect, useState } from 'react';

const Clock = () => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        console.log('-> Effet');
        const timerId = setTimeout(() => {
            console.log('Tic / Tac');
            setNow(new Date());
    
        }, 1000);

        return () => {
            console.log('-> Cleanup');
            clearTimeout(timerId);
        }
    })
    

    const time = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit'
    });
    const second = now.getSeconds();

    return (
        <p>{time}:{second<10 && '0'}{second}</p>
    )
};

export default Clock;