/*The ItemListContainer component takes from the database the info of the selected category to send it to the ItemList component*/

import { Container } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import music from '../music.json'

const ItemListContainer = () => {
  const category = useParams();
  /*async function fetchingData() {
    try{
      const dataFetched = await getData();
    } catch (err) {
      console.log(err);
    }
  }
  fetchingData();*/

  const showProducts = new Promise((resolve, reject) => {
    if (music.length > 0) {
      setTimeout(() => {
        resolve(music);
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

  if (category.id === undefined) {
    return (
      <Container className='body__Container'>
        <ItemList music={music}/>
      </Container>
    )
  } else {
    const catFilter = music.filter((mus) => mus.category === category.id);
    console.log(catFilter);
    return (
      <>
      <Container className='body__Container'>
        {catFilter ? (
          <ItemList music={catFilter}/>
        ) : (
          <ItemList music={music}/>)}
      </Container>
    </>
  )}
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