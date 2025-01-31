import React from 'react'

import { Game, Platform } from '../hooks/useGames'
//import { Card, CardBody } from '@chakra-ui/react/card'
import { CardBody, Card, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'

interface Props {
    game: Game
}


const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} boxShadow='lg' style={{ cursor: 'pointer', overflow: 'hidden' }}>
            <Image src={game.background_image} alt={game.name} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                {/* {game.parent_platforms.map(({ platform }) => <Text>{platform.name}</Text>)} */}
                <PlatformIconList platforms={game.parent_platforms.map(({ platform }) => platform)} />

            </CardBody>
        </Card>
    )
}

export default GameCard