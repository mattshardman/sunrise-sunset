import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Times {
    sunrise?: number;
    sunset?: number;
}

function Home() {
    const [coordinates, setCoordinates]: [Coordinates, Function] = useState();
    const [times, setTimes] : [Times, Function] = useState({});

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            setCoordinates(coords);
        });
    }

    const getTimes = async () => {
        try {
            const { latitude, longitude } = coordinates;
            const response = await axios.post("api/times", { latitude, longitude });
            const { sunrise, sunset } = response.data;
            setTimes({ sunrise, sunset });
        } catch (err) {
            console.log(err);
        }
    };

    console.log(times);

    useEffect(() => {
        if (coordinates) {
            getTimes();
        }
    }, [coordinates]);

    return (
        <main>
            <button onClick={getLocation}>Get Location</button>
        </main>
    )
}

export default Home;
