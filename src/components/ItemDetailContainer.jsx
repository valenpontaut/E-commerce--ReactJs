/*The ItemDetailContainer component takes from the database the info of the selected product to send it to the ItemDetail component*/

import React, {useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

  const idprod = useParams().id;
  const [product, setProduct] = useState([]);
  

  // useEffect(() => {
  //   const db = getFirestore();
  //   const item = doc(db, "products", idprod);
  //   getDoc (item).then((snapshot) => {
  //     if (snapshot) {
  //         const docs = snapshot.data();
  //         setProduct(docs);
  //     }
  //   });
  // }, []);

  return (
    <Container className='body__Container'>
      <ItemDetail
        item={product} 
        key={product.id}
        id={product.id}
        name={product.name}
        artist={product.artist}
        description={product.description}
        price={product.price}
        stock={product.stock}
        category={product.category}
        img={product.img}/>
    </Container>
  )
}

export default ItemDetailContainer