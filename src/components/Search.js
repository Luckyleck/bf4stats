import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './searchStyles.css'

export default function Search() {
    const [playerName, setPlayerName] = useState('')
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/stats/${playerName}`)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="search-main">
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
    )
}
