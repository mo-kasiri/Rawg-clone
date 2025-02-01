import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useData from '../hooks/useData';
import { Genre } from './GenreList';


interface Props {
    selectedGenre: Genre | null;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: { name: string } }[];
    metacritic: number;
}

function GameGrid({ selectedGenre }: Props) {
    const { data, error, isLoading } = useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
    const cardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            {error && <Text color='tomato'>{error}</Text>}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={10}>
                {isLoading && cardSkeletons.map((index) => <GameCardSkeleton key={index} />)}
                {!isLoading && data.map((game) => (<GameCard game={game} key={game?.id} />))}

            </SimpleGrid>
        </>
    )
}

export default GameGrid;