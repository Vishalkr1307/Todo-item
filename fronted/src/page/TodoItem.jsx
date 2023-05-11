import { Box, Flex, Heading, Icon, Text,Stack,useColorModeValue, Button, IconButton } from '@chakra-ui/react'
import React from 'react'
import {DeleteIcon,EditIcon} from "@chakra-ui/icons"
import { useDispatch } from 'react-redux'
import { delTodoData } from '../redux/app/action'
import { TodoEdit } from '../component/TodoEdit'

export const TodoItem = ({name,description,id}) => {
    const bgColor=useColorModeValue('gray.50','gray.800')
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(delTodoData(id))
    }

  return (
    <Box  border={'1px'} bg={bgColor} rounded={'lg'}>
        <Flex justify={'space-between'} align={'center'}>
            <Box>
                <Heading>{name}</Heading>
                <Text color={'gray.800'} fontSize={'2xl'}>{description}</Text>
                
            </Box>
            <Box>
                {/* <IconButton variant={'ghost'} icon={<EditIcon/>} boxSize={8} colorScheme='blue'/> */}
                <TodoEdit id={id}/>
                <IconButton variant={'ghost'} icon={<DeleteIcon/>} boxSize={8} colorScheme='red' onClick={handleDelete}/>

            </Box>

        </Flex>
    </Box>
  )
}
