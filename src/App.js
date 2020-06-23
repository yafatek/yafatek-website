import React from 'react';
import 'bulma/css/bulma.min.css'
import maintenance from '../src/img/monitor.svg'


function App() {
    return (
        <div className="App">
            <div className="container has-text-centered">
                <div className="notification is-rounded">
                    <h1 className="title">
                        Welcome To YafaTek
                    </h1>
                    <p className="subtitle">
                        We're Almost There
                    </p>
                    <p className="subtitle is-6">
                        Can't Wait to See you Soon :)
                    </p>
                    <figure className="image is-16by9">
                        <img src={maintenance} alt="image"/>
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default App;
