import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Flex,Text, Heading, Link, Stack, useColorModeValue, FormControl, FormLabel, Input, InputGroup, InputRightElement, Button, Spinner } from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as Rlink, useNavigate} from "react-router-dom"
import { addSignupData } from '../redux/auth/action'
import { useAnimate } from 'framer-motion'

const initState ={
    email:"",
    password:""
}
const reducer=(store,{type,payload})=>{
    switch (type){
        case "email":
            return {...store,email:payload}
        case "password":
            return {...store,password:payload}
        default:
            return {...store}
    }
    

}


export const SignUp = () => {
    const bgColor=useColorModeValue('gray.50','gray.800')
    const [showPassword,setShowPassword]=useState(false)
    const [text,setText] = useReducer(reducer,initState)
    const {auth,error,loading}=useSelector((store)=>store.auth)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const handleButton=()=>{
        dispatch(addSignupData(text))
    }
    useEffect(()=>{
        if(auth){
            navigate("/")
        }

    },[auth])
    
  return (
    <Flex h={'100vh'} bg={bgColor} align={'center'} >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} >
            <Box textAlign={'center'}>
                

                <Heading>Sign Up to Your account</Heading>
                <Text>To enjoy all of our cool <Link color={'blue.300'}>Features</Link></Text>
                

            </Box>
            <Box
             rounded={'lg'}
             boxShadow={'lg'}
             bg={useColorModeValue('white','gray.700')} p={8}>
                <Stack spacing={4}>
                    <Text textAlign={'center'} textShadow={'lg'} color={'red.400'}>{error}</Text>
                    <FormControl id='email' isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type='email' value={text.email} onChange={(e)=>setText({type:"email",payload:e.target.value})}/>
                    </FormControl>
                    <FormControl id='password' isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                            <Input type={showPassword?'text':'password'} value={text.password} onChange={(e)=>
                                setText({type:'password',payload:e.target.value})
                            }/>
                            <InputRightElement h={'full'}>
                            <Button variant={'ghost'} onClick={()=>setShowPassword((val)=>!val)}>{showPassword?<ViewIcon/>:<ViewOffIcon/>}</Button>


                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Stack>
                <Stack spacing={4} pt={4}>
                    <Button rounded={'lg'} bg={'blue.400'} color={'white'} _hover={{bg:'blue.500'}} onClick={handleButton}>{loading?<Spinner/>:'SignIn'}</Button>

                </Stack>
                <Stack pt={6}>
                    <Text textAlign={'center'}> Already a user? <Rlink color='blue' to={'/login'}>LogIn</Rlink> </Text>
                </Stack>

            </Box>


        </Stack>

    </Flex>
  )
}
