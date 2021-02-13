import React, {useState} from 'react';
import './App.css'

function Tweet({name, message}) {
    
    const [isLike, setLike] = useState(false);

    const changeColor = () => {
		setLike(!isLike);
	};

    return(
        <div className="tweet">
            <h3>{name}</h3>
            <div className="tweet-message">
                <p>{message}</p>
            </div>
            <div className="like-button">
                <h3 className={isLike ? "liked" : ""} onClick={changeColor}>Like</h3>
            </div>
        </div>
    );
}

export default Tweet;