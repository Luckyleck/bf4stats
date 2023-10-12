import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchStyles.css';

export default function Search() {
    const [playerName, setPlayerName] = useState('');
    const [searching, setSearching] = useState(false); // Add a state to track the searching status
    const navigate = useNavigate();

    const handleSearch = () => {
        setSearching(true); // Set searching to true to trigger the animation
        // Delay navigation to allow the animation to play
        setTimeout(() => {
            navigate(`/stats/${playerName}`);
        }, 800); // Adjust the delay time as needed
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className={`search-main ${searching ? 'fade-out' : ''}`}>
            <h1 className="header">Battlefield 4 Stats</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}