import React from 'react';

function MainPanel({ children }) {
    return (
        <div className="panel">
            { children }
            <style jsx>{`
               .panel {
                    position: relative;
                    background: #fff;
                    width: 700px;
                    height: 360px;
                    border-radius: 8px;
                    max-width: 95%;
                    box-shadow: 0 1px 3px rgba(60,64,67, 0.3), 0 4px 8px 3px rgba(60,64,67, 0.15);
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
               }         

               @media (max-width: 600px) {
                   .panel {
                       height: 280px;
                   }
               }
            `}</style>
        </div>
    )
}

export default MainPanel;