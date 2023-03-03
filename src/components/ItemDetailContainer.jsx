/*The ItemDetailContainer component takes from the database the info of the selected product to send it to the ItemDetail component*/

import React from 'react'
import { useParams } from 'react-router-dom'
import music from '../music.json'
import { Container } from '@chakra-ui/react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const idmusic = useParams().id;
  
  const itemmus = music.filter( (itemmus) => itemmus.id == idmusic);
  const item = itemmus[0]
  

  const showProducts = new Promise((resolve, reject) => {
    if (itemmus.length > 0) {
      setTimeout(() => {
        resolve(itemmus);
      }, 2000);
    } else {
      reject("No products were found")
    }
  })

  showProducts
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  return (
    <Container className='body__Container'>
      <ItemDetail
        item={item} 
        key={item.id}
        id={item.id}
        name={item.name}
        artist={item.artist}
        description={item.description}
        price={item.price}
        stock={item.stock}
        category={item.category}
        img={item.img}/>
    </Container>
  )
}

export default ItemDetailContainer