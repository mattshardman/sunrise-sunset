import * as React from 'react';

function Layout({ children }) {
    return (
        <main>
            {children}
            <style jsx>{`
                main {
                    box-sizing: border-box;
                    width: 100%;
                    height: 95vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-size: contain;
                    background-position: top;
                    background-repeat: no-repeat;
                }    
            `}</style>
        </main>
    )
}

export default Layout;