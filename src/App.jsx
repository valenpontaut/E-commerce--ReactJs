import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from './components/Cart';
import CartContextProvider from './context/CartContext';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FindUs from './components/FindUs';
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/aboutus' element={<AboutUs/>}/>
        <Route exact path='/contactus' element={<ContactUs/>}/>
        <Route exact path='/findus' element={<FindUs/>}/>
        <Route exact path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
