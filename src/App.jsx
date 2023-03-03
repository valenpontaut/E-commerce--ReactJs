import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from './components/Cart';
import CartContextComp from './context/CartContextComp';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FindUs from './components/FindUs';

function App() {
  return (
    <>
    <CartContextComp>
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/category/:id' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/aboutus' element={<AboutUs/>}/>
        <Route exact path='/contactus' element={<ContactUs/>}/>
        <Route exact path='/findus' element={<FindUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextComp>
    </>
  )
}

export default App
