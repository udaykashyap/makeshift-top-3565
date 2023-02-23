
import './App.css';
import "./App.css";
import { ChakraProvider } from '@chakra-ui/react'
import SingleProduct from "./components/SingleProduct";

import logo from './logo.svg';
import Home from './components/Home';

function App() {
  return (
  <ChakraProvider>
    <div className="App">
      <h1>Hi this is the first page</h1>
      <Home/>
    </div>
      </ChakraProvider>
  );
}

export default App;
