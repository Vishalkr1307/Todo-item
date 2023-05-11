import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Flex, Input, Menu, MenuButton, MenuItem, MenuList, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link as RLink } from 'react-router-dom'

export const Navbar = () => {
    const bgColor=useColorModeValue('gray.100', 'gray.900')
    const {colorMode,toggleColorMode}=useColorMode()
    const handleButton=()=>{
        localStorage.clear()
    }
  return (
    <>
        <Box bg={bgColor} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <RLink to={'/'}>
                    <Box>Todo-App</Box>
                </RLink>
                <Stack>
                    {/* <Input  placeholder='Serch Item' size={'lg'} rounded={'lg'} outline={'none'}/> */}
                    <RLink to={'/todo'}>
                        <Button>ADD-Todo</Button>
                    </RLink>
                </Stack>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'}>
                        <Button onClick={toggleColorMode}>{colorMode=='light'?<MoonIcon/>:<SunIcon/>}</Button>
                        <Menu>
                            <MenuButton
                            as={Button}
                            rounded={'lg'}
                            cursor={'pointer'}
                            minW={0}
                            variant={'link'}>

                                <Avatar src='' size={'sm'}/>
                            </MenuButton>
                            <MenuList>
                                <RLink to="/login">

                                    <MenuItem as={Button}>LogIn</MenuItem>
                                </RLink>
                                

                                    <MenuItem as={Button} onClick={handleButton}>SignOut</MenuItem>
                                
                            </MenuList>
                        </Menu>
                    </Stack>
                </Flex>

            </Flex>

        </Box>
    </>
  )
}
