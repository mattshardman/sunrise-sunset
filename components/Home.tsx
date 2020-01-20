import React from 'react';
import useTimes from './useTimes';
import MainPanel from './MainPanel';
import Layout from './Layout';
import SunTimes from './SunTimes';
import SunArc from './SunArc';
import Title from './Title';

function Home() {
    const timeData = useTimes();

    const { sunPosition } = timeData;

    return (
        <Layout>
            <Title text="Sun Times" />
            <MainPanel>
                <SunArc sunPosition={sunPosition} />
                <SunTimes {...timeData} />
            </MainPanel>
        </Layout>
    );
}

export default Home;
