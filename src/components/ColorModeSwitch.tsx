import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react"


const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack pr='10px' pt='10px'>
            <Text pr='10px' fontSize='sm'>Dark Mode</Text>
            <Switch size='lg' colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        </HStack>

    )
}

export default ColorModeSwitch