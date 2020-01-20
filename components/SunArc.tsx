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
                    max-width: 100%;
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
            `}</style>
        </div>
    )
}

export default SunArc;
