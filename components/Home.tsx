import React from 'react';
import useTimes from './useTimes';
import MainPanel from './MainPanel';
import Layout from './Layout';

function Home() {
    const timeData = useTimes();

    return (
        <Layout>
            <MainPanel {...timeData} />
        </Layout>
    );
}

export default Home;
