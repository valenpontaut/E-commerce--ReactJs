//The FinishPurchase components contains a form that is going to be used to send the information of the buyer to firebase with the rest of the order

import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { collection, getFirestore, addDoc} from "firebase/firestore";
import { CartContext } from "../context/CartContext"
import purchasesuccess from '../img/purchase-success.png'

const FinishPurchase = () => {
  const {cart, totalPrice} = useContext(CartContext)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState('')
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth()+1;
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const order = {
    buyer: {name:firstName, lastname:lastName, email:email, phone:phone, address:address, city:city, state:state, postalCode:postalCode, country:country},
    items: cart.map(item => ({id:item.id, title:item.name, artist:item.artist, category:item.category, price:item.price, amount:item.amount})),
    date: date + '/' + month + '/' + year,
    time: hours + ':' + minutes,
    total:totalPrice()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    (firstName === '' || lastName === '' || email === '' || phone === '' || address === '' || city === '' || state === '' || postalCode === '' || country === '') ?
      setError('All the fields must be completed')
    :
    (termsAgreed ?
      addDoc(ordersCollection, order).then(({id}) => setOrderId(id)) && setError('')
      :
      setError('Must accept our terms and conditions')
    )
  }

  return(
    <>
    {(orderId === null) ?
    <div className='body__Container'>
        <form onSubmit={handleSubmit}>
          <div className='finishPurchase__divContainer'>
            <div>
              <legend className='finishPurchase__divContainer__legend__text'>Personal Information</legend>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>First Name:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>Last Name:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setLastName(e.target.value)} required />
              </div> 
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>Email Address:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="email" onChange={(e) => setEmail(e.target.value)} required />
              </div> 
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>Phone Number:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="tel" onChange={(e) => setPhone(e.target.value)} required />
              </div>
            </div>
            <div>
              <legend className='finishPurchase__divContainer__legend__text'>Shipping Information</legend>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>Address Line:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setAddress(e.target.value)} required />
              </div>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>City:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setCity(e.target.value)} required />
              </div>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>State/Province:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setState(e.target.value)} required />
              </div>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>Postal/Zip Code:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setPostalCode(e.target.value)} required />
              </div>
              <div>
                <div><label className='finishPurchase__divContainer__form__label'>Country:</label></div>
                <input className='finishPurchase__divContainer__form__input' type="text" onChange={(e) => setCountry(e.target.value)} required />
              </div>
            </div>
          </div>
          <div className='finishPurchase__divTerms'>
            <div>
              <input className='finishPurchase__divTerms__checkbox' type='checkbox' onChange={(e) => setTermsAgreed(e.target.value)} />
              <label>I agree to the <Link>terms and conditions</Link></label>
            </div>
            {(error != '') ?
              <div className='finishPurchase__divTerms__errorMessage'>
                {error}
              </div>
            :null}
            <button className='finishPurchase__divTerms__purchaseBtn' type='submit'>
              Finish Purchase
            </button>
          </div>
        </form>
    </div>
    :
    <div className='body__Container'>
      <div className='finishPurchase__successPurchase__container'>
        <img className='finishPurchase__successPurchase__img' src={purchasesuccess}/>
        <div className='finishPurchase__successPurchase__congrats'>
          Congrats on your purchase!
        </div>
        <div className='finishPurchase__successPurchase__orderid'>
          Your order Id: {orderId}
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default FinishPurchase