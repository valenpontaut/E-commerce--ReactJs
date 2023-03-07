/*The ItemCount component is a button included in the Item and ItemDetail component. It doesn't show negative values or a number superior to the available stock*/

import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom"

const ItemCount = ({w, stock, onAdd}) => {
  const [counter,setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [purchase, setPurchase] = useState(false)
  const toast = useToast()
  const idError = 'idError'
  const showError = (message) => {
    if (!toast.isActive(idError)) {
      toast({
        idError,
        title: message,
        position: 'bottom',
        status: 'error',
        isClosable: true,
        duration: 2000
      })
    }
  }
  const idSuccess = 'idSuccess'
  const showSuccess = (message) => {
    if (!toast.isActive(idSuccess)) {
      toast({
        idSuccess,
        title: message,
        position: 'bottom',
        status: 'success',
        isClosable: true,
        duration: 2000
      })
    }
  }
  const add = () => {
    if (counter < itemStock) {
      setCounter(counter+1);
    } else {
      showError(`There's no more available stock`)
    }
  }
  const substract = () => {
    if (counter > 1) {
      setCounter(counter-1);
    }
  }
  const addToCart = (amount) => {
    if (itemStock === 0) {
      showError(`There's no more available stock`);
    } else {
      setItemStock(itemStock-amount);
      setCounter(1);
      showSuccess(`Product succesfully added to cart`);
      onAdd(amount);
      setPurchase(true);
    }
  }
  return (
    <>
      <div className='itemCount__btnContainer'>
        <div className='itemCount__btnCounter'>
          <button onClick={() => substract()}>-</button>
          <p>{counter}</p>
          <button onClick={() => add()}>+</button>
        </div>
        <div className='itemCount__btnAddCart'>
          <button className='itemCount__btnAddCart' onClick={() => addToCart(counter)}>
            <p>Add to cart</p>
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </div>
      </div>
      {purchase ?
        <Link to={'/cart'}>
          <button className='itemCount__btnPurchase'>
              Purchase
          </button>
        </Link>
      : null}
    </>
  )
} 


export default ItemCount