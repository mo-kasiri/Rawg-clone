import { Spinner, Text, Image, HStack, List, ListItem, VStack, Button, Link } from '@chakra-ui/react';
import useData from '../hooks/useData';
import getCroppedImageUrl from '../services/image-url';


interface Props {
    onSelectGenre: (genre: Genre) => void;
}

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

function GenreList({ onSelectGenre }: Props) {
    const { data, error, isLoading } = useData<Genre>("/genres");


    return (
        <>

            <List>
                {error && <div>{error}</div>}
                {isLoading && <Spinner />}
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} />

                            <Link fontWeight="semi-bold" pl={1} fontSize='lg' onClick={onSelectGenre.bind(null, genre)}>{genre.name}</Link>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default GenreList