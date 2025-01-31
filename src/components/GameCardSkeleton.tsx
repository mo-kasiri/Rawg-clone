import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


function GameCardSkeleton() {
    return (
        <Card>
            <Skeleton height='200px' minWidth='350px' />
            <CardBody borderRadius={10} boxShadow='lg' overflow='hidden'>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton