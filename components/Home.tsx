import React from 'react';
import useTimes from './useTimes';
import MainPanel from './MainPanel';
import Layout from './Layout';
import SunTimes from './SunTimes';
import SunArc from './SunArc';

function Home() {
    const timeData = useTimes();

    const { sunPosition } = timeData;

    return (
        <Layout>
            <MainPanel>
                <SunArc sunPosition={sunPosition} />
                <SunTimes {...timeData} />
            </MainPanel>
        </Layout>
    );
}

export default Home;
