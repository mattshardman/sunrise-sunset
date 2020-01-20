import React from 'react';
import useTimes from './useTimes';
import MainPanel from './MainPanel';
import Layout from './Layout';
import SunTimes from './SunTimes';
import SunArc from './SunArc';

function Home() {
    const timeData = useTimes();

    return (
        <Layout>
            <MainPanel>
                <SunArc />
                <SunTimes {...timeData} />
            </MainPanel>
        </Layout>
    );
}

export default Home;
