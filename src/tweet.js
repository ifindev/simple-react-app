import React from 'react';
import './App.css'

function Tweet({name, message}) {
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <div className="tweet-message">
                <p>{message}</p>
            </div>
            <h3>This is the number of like</h3>
        </div>
    );
}

export default Tweet;