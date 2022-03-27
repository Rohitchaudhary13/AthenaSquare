import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Switch } from '@chakra-ui/react'

const App = () => {
    const { toggleColorMode } = useColorMode()
    const formbackground = useColorModeValue("gray.100", "gray.700")
      return (
    <div>
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={formbackground} p={12} rounded={6}>
                <Heading mb={6}>
                    LogIn
                </Heading>
                <Input placeholder="xyz@gmail.com" variant="filled" mb={3} type="email" />
                <Input placeholder='*************' variant='filled' mb={3} type="password"/>
                <Button mb={6} colorScheme="teal">LogIn</Button>
                <Switch colorScheme='teal' size='lg' onchange={toggleColorMode}/>
                <Button onClick={toggleColorMode}>toggleColorMode</Button>
            </Flex>
        </Flex>
    </div>
  )
}

export default App