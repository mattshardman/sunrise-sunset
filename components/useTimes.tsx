import { useState } from 'react';
import axios from 'axios';

interface Times {
    sunrise?: number;
    sunset?: number;
}

function useTimes() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [times, setTimes]: [Times, Function] = useState({ });
    const [sunPosition, setSunPosition] = useState();

    function getTime(timeNow, inputTime) {
        const now = timeNow.toDateString();
        return new Date(`${now} ${inputTime}`);
    }
    
    function getTimeNow() {
        return new Date(Date.now());
    }
    
    function getPosition(results) {
        const now = getTimeNow();
        const sunSet = getTime(now, results.sunset);
        const sunRise = getTime(now, results.sunrise);

        const fullDay = sunSet.valueOf() - sunRise.valueOf();
        const untilNow = now.valueOf() - sunRise.valueOf();
        return 180 * untilNow / fullDay;
    }

    const getLocation = async () : Promise<Coordinates> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { coords } = position;
                resolve(coords);
            }, (error) => {
                reject(error);
            });
        });
    }

    const getSunTimeData = async (coords: Coordinates) => {
        const { latitude, longitude } = coords;
        const response = await axios.post("api/times", { latitude, longitude });
        const { sunrise, sunset } : { sunset: number, sunrise: number } = response.data;
        return { sunrise, sunset };
    };

    const getTimes = async () => {
        setLoading(true);
        try {
            const coords = await getLocation();
            const sunTimes = await getSunTimeData(coords);
            const position = getPosition(sunTimes);

            setSunPosition(position);
            setTimes(sunTimes);
            setLoading(false);
        } catch {
            setLoading(false);
            setError(true);
        }
       
    }

    return { sunPosition, times, getTimes, loading, error };
}

export default useTimes;