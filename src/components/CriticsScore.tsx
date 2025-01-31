import { Badge, Box } from "@chakra-ui/react";

interface Props {
    criticsScore: number;
}

function CriticsScore({ criticsScore }: Props) {
    return (
        <Badge colorScheme={criticsScore > 75 ? "green" : criticsScore > 50 ? "yellow" : "tomato"}>{criticsScore}</Badge>
    )
}

export default CriticsScore;