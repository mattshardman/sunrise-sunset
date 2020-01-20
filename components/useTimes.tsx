import { useState } from 'react';
import * as utils from './utils';

interface Times {
    sunrise?: number;
    sunset?: number;
}

function useTimes() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [times, setTimes]: [Times, Function] = useState({ });
    const [sunPosition, setSunPosition] = useState();

    const getTimes = async () => {
        setLoading(true);
        try {
            const coords = await utils.getLocation();
            const sunTimes = await utils.getSunTimeData(coords);
            const position = utils.getPosition(sunTimes);

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