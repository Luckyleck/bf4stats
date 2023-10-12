import { useEffect, useState } from 'react';

export function usePlayerStats(playerName) {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const encodedName = encodeURIComponent(playerName);
                const url = `https://api.gametools.network/bf4/stats/?name=${encodedName}&platform=pc`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setStats(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchStats();
    }, [playerName]);

    return { stats, loading, error };
}