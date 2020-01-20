import * as React from 'react';

function SunTimes({ times, getTimes, loading }) {
    return (
        <div className="times">
            <div className="time">
                <p><strong>Sunrise:</strong></p>
                <small>{times.sunrise}</small>
            </div>
            <button onClick={getTimes}>
                {loading ? 'Loading...' : 'Get Location'}
            </button>
            <div className="time">
                <p><strong>Sunset:</strong></p>
                <small>{times.sunset}</small>
            </div>
            <style jsx>{`
                .times {
                    height: 80px;
                    width: 100%;
                    background: #fff;
                    z-index: 1;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
    
                .time {
                    box - sizing: border-box;
                    font-size: 20px;
                    height: 100%;
                    width: 140px;
                    text-align: center;
                    padding: 12px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }
    
                p, small {
                    margin: 0;
                }
     
                button {
                    background: deepskyblue;
                    height: 40px;
                    width: 250px;
                    padding: 0 16px;
                    color: #fff;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: box-shadow 400ms, transform 400ms;
                }
    
                button:hover {
                    box - shadow: 0 2px 10px rgba(0,0,0, 0.1);
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
}

export default SunTimes;