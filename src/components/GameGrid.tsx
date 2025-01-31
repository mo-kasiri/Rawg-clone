import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

function GameGrid() {
    const { games, error } = useGames();

    return (
        <>
            {error && <Text color='tomato'>{error}</Text>}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {games.map((game) => (
                    <GameCard game={game} key={game?.id} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;