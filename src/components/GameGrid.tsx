import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

function GameGrid() {
    const { games, error, isLoading } = useGames();
    const cardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text color='tomato'>{error}</Text>}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoading && cardSkeletons.map((index) => <GameCardSkeleton key={index} />)}
                {!isLoading && games.map((game) => (
                    <GameCard game={game} key={game?.id} />
                ))}

            </SimpleGrid>
        </>
    )
}

export default GameGrid;