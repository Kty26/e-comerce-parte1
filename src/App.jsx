
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AppNavbar from "./components/AppNavbar";
import Login from "./pages/login";
import ProductsDetail from "./pages/ProductsDetail";
import Purchases from './pages/purchases';
import Loader from './components/Loader';
import { useSelector } from "react-redux";
import Container  from "react-bootstrap/Container";
function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <HashRouter>
        {
        isLoading && <Loader />
        }
      <AppNavbar />
      <Container fluid > 

      
      <Routes>
        <Route element={<Home />} path="/" />
        
        <Route element={<Login />} path="/login" />
        <Route element={<ProductsDetail />} path="/products/:id" />
        
        {/*Protegida*/}
        <Route element={<Purchases />} path="/purchases" />
      </Routes>
      </Container>
    </HashRouter>
 
    </>
  )
}

export default App
