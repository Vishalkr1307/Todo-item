import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    IconButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  import React, { useReducer } from 'react'
  import { EditIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux'
import { updateTodoData } from '../redux/app/action'


  const initState={
    name:"",
    description:""
  }
  const reducer=(store,{type,payload})=>{
    switch(type){
      case "name":
        return {...store,name:payload}
      case 'description':
        return {...store,description:payload}
    }
  
  }
  


export const TodoEdit = ({id}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [text,setText]=useReducer(reducer,initState)
    const dispatch=useDispatch()
    const handleUpdate=()=>{
        dispatch(updateTodoData(id,text))
        onClose()

    }
    
    return (
      <>
         <IconButton variant={'ghost'} icon={<EditIcon/>} boxSize={8} colorScheme='blue' onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Todo-Update</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <FormControl>
                    <FormLabel>Update-Name</FormLabel>
                    <Input type='text' value={text.name} onChange={(e)=>setText({
                        type:"name",payload:e.target.value
                    })}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input type='text' value={text.description} onChange={(e)=>{
                        setText({type:'description', payload:e.target.value})
                    }}/>
                </FormControl>
              
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button variant='solid' onClick={handleUpdate}>Update-Todo</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
