import * as React from 'react';

function Layout({ children }) {
    return (
        <main>
            {children}
            <style jsx>{`
                main {
                    font-family: Noto Sans, sans-serif;
                    color: #484848;
                    box-sizing: border-box;
                    width: 100%;
                    height: 95vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: url("illustration.png");
                    background-size: contain;
                    background-position: top;
                    background-repeat: no-repeat;
                }    
            `}</style>
        </main>
    )
}

export default Layout;