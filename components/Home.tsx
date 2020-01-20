import React from 'react';
import useTimes from './useTimes';

function Home() {
    const { loading, error, times, getTimes } = useTimes();

    return (
        <main>
            <div>
                <p><strong>Sunrise:</strong> {times.sunrise}</p>
                <p><strong>Sunset:</strong> {times.sunset}</p>
            </div>
            <button onClick={getTimes}>
                { loading ? 'Loading...' : 'Get Location' }
            </button>
        </main>
    )
}

export default Home;
