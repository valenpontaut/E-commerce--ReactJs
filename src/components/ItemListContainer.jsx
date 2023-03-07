/*The ItemListContainer component takes from the database the info of the selected category to send it to the ItemList component*/

import { Container } from '@chakra-ui/react'
import React, {useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore} from "firebase/firestore";
import Loading from './Loading';

const ItemListContainer = () => {
  const {category} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
      setLoading(false)
    }
    fetchData();
  }, []);
  
  const catFilter = products.filter((prod) => prod.category === category);
  
  return (
    <Container className='body__Container'>
      {loading ? <Loading/> : (category ? <ItemList products = {catFilter}/> : <ItemList products = {products}/>)}
    </Container>
  )
}

export default ItemListContainer

/*<Container bg='#0D1821' color='white'>
    Color 1
  </Container>
  <Container bg='#2B3A67' color='white'>
    Color 2
  </Container>
  <Container bg='#496A81' color='white'>
    Color 3
  </Container>
  <Container bg='#66999B' color='white'>
    Color 4
  </Container>
  <Container bg='#B3AF8F' color='white'>
    Color 5
  </Container>*/