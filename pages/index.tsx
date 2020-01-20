import React, { useState } from 'react';

function Home() {
    const [coordinates, setCoordinates] : [Coordinates, Function] = useState();

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            setCoordinates(coords);
        });
    }

    console.log(coordinates);

    return (
        <main>
            <button onClick={getLocation}>Location</button>
        </main>
    )
}

export default Home;
