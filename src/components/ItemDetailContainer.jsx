//The ItemDetailContainer component takes from the database the info of the selected product to send it to the ItemDetail component

import React, {useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from './Loading';

const ItemDetailContainer = () => {
  const {id}= useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDoc(doc(db, "products",id));
      setProduct({id: querySnapshot.id, ...querySnapshot.data()});
      setLoading(false)
    }
    fetchData();
  }, []);
  return (
    <>
    <Container className='body__Container'>
      {loading ? 
        <Loading/>
      :
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
      }
    </Container>
    </>
  )
}

export default ItemDetailContainer