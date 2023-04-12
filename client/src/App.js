
import './App.css';
import AllRoutes from "../src/AllRouters/AllRoutes"
import { Box } from '@chakra-ui/react';
import TopNav from './Components/TopNav';
import MidNav from './Components/MidNav';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Box>
    <TopNav/>
    <MidNav/>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
   </Box>
  );
}

export default App;
