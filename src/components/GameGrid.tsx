import { useEffect, useState } from 'react'


import { Text } from '@chakra-ui/react'

import apiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
    //background_image: string;
};

interface FetchGamesResponse {
    count: number;
    results: Game[];

}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/xgames')
            .then((response) => { setGames(response.data.results); })
            .catch((error) => { setError(error.message); });
    }, []);

    return (
        <>
            {error && <Text color='tomato'>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game?.id}>{game?.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GameGrid;