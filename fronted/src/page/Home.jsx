import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodoData } from '../redux/app/action'
import { Container, Flex, Stack } from '@chakra-ui/react'
import { TodoItem } from './TodoItem'

export const Home = () => {
    const {data}=useSelector((store)=>store.app)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(data?.length==0){
            dispatch(getTodoData())
        }

    },[dispatch,data?.length])
  return (
    <Container mt={8} padding={4}>
        <Stack spacing={4}>

        {data?.length>0 && data.map((item)=><TodoItem key={item._id} name={item.name} description={item.description} id={item._id}/>)}
        </Stack>
    </Container>
  )
}
