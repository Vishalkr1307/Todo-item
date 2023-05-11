import { Box, Button, Container, FormControl, FormLabel, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTododata, getTodoData } from '../redux/app/action'
import { TodoItem } from './TodoItem'
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

export const Todo = () => {
  const bgColor=useColorModeValue('gray.50','gray.800')
  const [text,setText]=useReducer(reducer,initState)
  const {token}=useSelector((store)=>store.auth)
  const {data,isLoading}=useSelector((store)=>store.app)
  const dispatch=useDispatch()
  const handleButton=()=>{
    dispatch(addTododata(text,token))
  }
  useEffect(()=>{
    if(data?.length==0){

      dispatch(getTodoData())
    }

  },[dispatch,data?.length])
  
  return (
    <Container bg={bgColor} h={'-moz-max-content'}  rounded={'lg'} mt={5}>
      <Stack>
        <Box>
          <Stack mt={2} position={'sticky'}>
            <FormControl>
              <Input type='text' placeholder='Add-Todo-Name' value={text.name} onChange={(e)=>
                setText({type:'name',payload:e.target.value})

              }/>
            </FormControl>
            <FormControl>
              <Input type='text' placeholder='Add-Todo-Description' value={text.description} onChange={(e)=>setText({type:'description',payload:e.target.value})}/>
            </FormControl>
            <Button bg={'blue.400'} onClick={handleButton}>ADD-TODO</Button>
            
            

          </Stack>

        </Box>

      </Stack>
      <Stack mt={10}>
        {data?.length>0 && data.map((item)=><TodoItem key={item._id} name={item.name} description={item.description} id={item._id}/>)}

      </Stack>

    </Container>
    
  )
}
