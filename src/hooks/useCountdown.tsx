import { useEffect, useState } from 'react';

const useCountdown = (targetDate:Date = new Date()) => {
    const countDownDate = targetDate.getTime();

    const [countDown, setCountDown] = useState<number | null>(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        let interval:any;
        
        const difference = countDownDate - new Date().getTime()
        if(difference >= 0){
            interval = setInterval(() => {
                const remainingTime = countDownDate - new Date().getTime();
                if (remainingTime >= 0) {
                    setCountDown(remainingTime);
                } else {
                    setCountDown(null);
                    clearInterval(interval);
                }
            }, 1000);
        }else {
            setCountDown(null);
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [countDownDate, ]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown:number|null) => {
    if (!countDown) {
        return [0, 0, 0, 0, false]
    }
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds, true];
};

export default useCountdown;