import { HStack, Image, Spacer, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

function NavBar() {
    return (
        <HStack justifyContent='space-between'>
            <Image src={logo} boxSize="60px"></Image>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;