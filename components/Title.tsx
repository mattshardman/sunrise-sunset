import * as React from 'react';

function Title({text}) {
    return (
        <div className="title">
            <h1>{text}</h1>
            <style jsx>{`
                .title {
                    width: 700px;
                    max-width: 100%;
                    height: 200px;
                    display: flex; 
                    align-items: flex-end;
                    justify-content: center;
                    text-align: center;
                }    
            `}</style>
        </div>
    )
}

export default Title;