import React from 'react';
import { useParams } from 'react-router-dom';
import { usePlayerStats } from '../hooks/usePlayerStats';
import './statStyles.css'; // Import the CSS file for styling

export default function Stats() {
    const { playerName } = useParams();
    const { stats, loading, error } = usePlayerStats(playerName);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Remove the stats you don't need for the grid
    const filteredStats = {
        userName: stats.userName,
        rank: stats.rank,
        scorePerMinute: stats.scorePerMinute,
        killsPerMinute: stats.killsPerMinute,
        winPercent: stats.winPercent,
        bestClass: stats.bestClass,
        accuracy: stats.accuracy,
        headshots: stats.headshots,
        timePlayed: stats.timePlayed,
        killDeath: stats.killDeath,
    };

    return (
        <div className="stats-container">
            <h1>{playerName} Stats</h1>
            <div className="stats-grid">
                {Object.entries(filteredStats).map(([key, val]) => (
                    <div key={key} className="stat-box">
                        <div className="stat-key">
                            {key.replace(/([a-z0-9])([A-Z])/g, '$1 $2')} {/* Add spaces between words */}
                        </div>
                        <div className="stat-value">{val}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}