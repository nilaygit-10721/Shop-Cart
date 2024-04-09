import Navbar1 from "./components/Navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sucess from "./Pages/Sucess"
import Cancel from "./Pages/Cancel"
import Store from "./Pages/Store"
import Cartprovider from "./CartContext";
function App() {


  return (
    <>
    <Cartprovider>

    <Container>


    <Navbar1/>
    <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="Sucess" element={<Sucess />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
   
    </Container>
    </Cartprovider>

    </>
  )
}

export default App
