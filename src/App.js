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
                        The WebSite is under Maintenance
                    </p>
                </div>
                <div className="container">
                    <figure className="image maintenance-img is-128x128">
                        <img src={maintenance} alt="Maintenance image"/>
                    </figure>
                </div>

            </div>
        </div>
    );
}

export default App;
