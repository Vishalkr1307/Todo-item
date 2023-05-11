import { Box, Button, Checkbox, Container, Flex, FormControl, FormLabel, Heading, IconButton, Input, Link, Stack ,Text, useColorModeValue} from '@chakra-ui/react'
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as Rlink, useLocation, useNavigate} from "react-router-dom"
import { addLoginData, gitAuthData, googleAuthData } from '../redux/auth/action'
import { GoMarkGithub} from "react-icons/go";
import {FaGoogle} from "react-icons/fa"
import axios from 'axios'
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
export const Login = () => {
    const bgColor=useColorModeValue('gray.50','gray.800')
    const [text,setText]=useReducer(reducer,initState)
    const {token,auth,error}=useSelector((store)=>store.auth)
    const dispatch=useDispatch()
    const loaction=useLocation()
    const navigate=useNavigate()
    
    
    const handleButton=()=>{
        dispatch(addLoginData(text))
        
    }
    const handleGoogle=()=>{
        window.open("http://localhost:2345/auth/google")
        
        

    }
    
    const handleGithub=()=>{
        window.open("http://localhost:2345/auth/github")
        
        // dispatch(gitAuthData())

    }
    useEffect(()=>{
        
        if(auth){
            navigate(loaction?.state?.from?.pathname)
        }
        
        

    },[auth])
    
    

    
    
    
  return (
    <Flex minH={'100vh'} align={'center'} bg={bgColor}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'}>
            <Box align={'center'}>
                <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                <Text fontSize={'xl'} color={'gray'}  >to enjoy all of cool <Link>Features</Link></Text>

            </Box>
            <Box 
            rounded={'lg'}
            boxShadow={'lg'}
            bg={useColorModeValue('white','gray.700')}
            p={8}>
                <Stack spacing={4}>
                    <Heading rounded={'lg'} textAlign={'center'} fontSize={'sm'} color={'red.500'}>{error}</Heading>
                    <FormControl id='email' isRequired>
                        <FormLabel>Email Address</FormLabel>
                        <Input type='email' value={text.email} onChange={(e)=>setText({type:'email',payload:e.target.value})}/>

                    </FormControl>
                    <FormControl id='password' isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' value={text.password} onChange={(e)=>setText({type:"password",payload:e.target.value})}/>
                    </FormControl>
                <Stack
                direction={{base:'column',sm:'row'}} align={'start'} justifyContent={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot Password</Link>


                </Stack>
                

                   

                        <Button bg={'blue.400'} color={'white'} _hover={{bg:'blue.600'}} onClick={handleButton} >
                            SignIn
                        </Button>
                </Stack>
                <Stack display={'flex'} direction={'row'} align={'center'} justifyContent={'center'} spacing={8} mt={10}>
                    <IconButton icon={<GoMarkGithub size="xl" />}  variant="ghost" color={'blue.300'} onClick={handleGithub}/>
                    <IconButton icon={<FaGoogle size={'xl'} />} variant='ghost' color={'blue.300'} onClick={handleGoogle}/>
                </Stack>
                <Stack pt={6}>
                    <Text textAlign={'center'}> Did'nt hava a account? <Rlink color='blue' to={'/signup'}>SignUp</Rlink> </Text>
                </Stack>

                   
                
                

            </Box>

        </Stack>
    </Flex>
  )
}
