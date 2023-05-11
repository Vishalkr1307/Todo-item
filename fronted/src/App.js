import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { Navbar } from './component/navbar';
import { Login } from './page/Login';
import { SignUp } from './page/SignUp';
import { AllRoute } from './component/AllRoute';

function App() {
  return (
    <>
    <Navbar/>
    <AllRoute/>

    </>
  );
}

export default App;
