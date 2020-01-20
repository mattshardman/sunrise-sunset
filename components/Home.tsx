import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Times {
    sunrise?: number;
    sunset?: number;
}

function Home() {
    const [loading, setLoading] = useState(false);
    const [coordinates, setCoordinates]: [Coordinates, Function] = useState();
    const [times, setTimes]: [Times, Function] = useState({});

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            setCoordinates(coords);
        });
    }

    const getTimes = async () => {
        try {
            setLoading(true);
            const { latitude, longitude } = coordinates;
            const response = await axios.post("api/times", { latitude, longitude });
            const { sunrise, sunset } = response.data;
            setTimes({ sunrise, sunset });
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (coordinates) {
            getTimes();
        }
    }, [coordinates]);

    return (
        <main>
            <div>
                <p><strong>Sunrise:</strong> {times.sunrise}</p>
                <p><strong>Sunset:</strong> {times.sunset}</p>
            </div>
            <button onClick={getLocation}>
                Get Location
                </button>
        </main>
    )
}

export default Home;
