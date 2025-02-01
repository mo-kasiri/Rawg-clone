
import { CardBody, Card, Heading, Image, Text, HStack } from '@chakra-ui/react'
import { Game } from './GameGrid'
import PlatformIconList from './PlatformIconList'
import CriticsScore from './CriticsScore'
import getCroppedImageUrl from '../services/image-url'

interface Props {
    game: Game
}


const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} boxShadow='lg' style={{ cursor: 'pointer', overflow: 'hidden' }}>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                {/* {game.parent_platforms.map(({ platform }) => <Text>{platform.name}</Text>)} */}
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />
                    <Text fontSize='sm'>Score: <CriticsScore criticsScore={game.metacritic} /></Text>
                </HStack>

            </CardBody>
        </Card>
    )
}

export default GameCard