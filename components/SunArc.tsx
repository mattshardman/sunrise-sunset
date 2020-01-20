import * as React from 'react';

function SunArc({ sunPosition } : { sunPosition: number }) {
    return  (
        <div className="sun-arc">
            <div className="sun" />
            <style jsx>{`
                .sun-arc {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    top: 82px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    border: 1px solid #eaeaea;
                    transform: rotate(${0 || sunPosition}deg);
                    transition: transform 4s;
                }     

                .sun {
                    position: absolute;
                    left: -50px;
                    height: 100px;
                    width: 100px;
                    border-radius: 50%;
                    background: #ffe121;
                    box-shadow: 0 4px 15px rgba(255, 225, 33, 0.7);
                }           

                @media (max-width: 600px) {
                    .sun-arc {
                        width: 300px;
                        height: 300px;
                    }

                    .sun {
                        height: 50px;
                        width: 50px;
                        left: -25px;
                    }
                }
            `}</style>
        </div>
    )
}

export default SunArc;
