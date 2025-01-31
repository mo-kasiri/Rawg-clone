
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        nintendo: SiNintendo,
        web: BsGlobe
    }


    return (

        <HStack marginY={2}>
            {platforms.map((platform) => <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconList