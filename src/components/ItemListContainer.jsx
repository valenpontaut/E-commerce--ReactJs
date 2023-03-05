/*The ItemListContainer component takes from the database the info of the selected category to send it to the ItemList component*/

import { Container } from '@chakra-ui/react'
import React, {useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {

  const category = useParams();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "products");
    getDocs (itemCollection).then((snapshot) => {
      if (snapshot) {
          const docs = snapshot.docs.map((doc) => doc.data());
          setProducts(docs);
      }
    });
  }, []);
  console.log(products)
  if (category.id === undefined) {
    return (
      <Container className='body__Container'>
        <ItemList products={products}/>
      </Container>
    )
  } else {
    const catFilter = products.filter((prod) => prod.category === category.id);
    return (
      <Container className='body__Container'>
        <ItemList products={catFilter}/>
      </Container>
    )
  }  
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