import { useState } from 'react';
import axios from 'axios';

interface Times {
    sunrise?: number;
    sunset?: number;
}

function useTimes() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [times, setTimes]: [Times, Function] = useState({});

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
        const { sunrise, sunset } = response.data;
        return { sunrise, sunset };
    };

    const getTimes = async () => {
        setLoading(true);
        try {
            const coords = await getLocation();
            const sunTimes = await getSunTimeData(coords);
            setTimes(sunTimes);
            setLoading(false);
        } catch {
            setLoading(false);
            setError(true);
        }
       
    }

    return { times, getTimes, loading, error };
}

export default useTimes;