import { Container } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {
  const category = useParams();
  const music = [
    {
      id: 1,
      name: 'Unlimited Love',
      artist: 'Red Hot Chili Peppers',
      price: 17490,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magnam voluptatum sequi deserunt consequuntur vitae aut ex, doloribus quia mollitia nisi? Vitae voluptatum molestiae pariatur repudiandae neque repellendus minima natus.',
      stock: 2,
      category: 'Vinyl',
      img: '/src/img/rhcp-unlimitedLove.jpg'
    },
    {
      id: 2,
      name: 'The Dark Side Of The Moon',
      artist:'Pink Floyd',
      price: 4949,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magnam voluptatum sequi deserunt consequuntur vitae aut ex, doloribus quia mollitia nisi? Vitae voluptatum molestiae pariatur repudiandae neque repellendus minima natus.',
      stock: 3,
      category: 'CD',
      img: '/src/img/pinkFloyd-theDarkSideOfTheMoon.png'
    },
    {
      id: 3,
      name: 'Mothership',
      artist: 'Led Zeppelin',
      price: 3900,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, magnam voluptatum sequi deserunt consequuntur vitae aut ex, doloribus quia mollitia nisi? Vitae voluptatum molestiae pariatur repudiandae neque repellendus minima natus.',
      stock: 1,
      category: 'CD',
      img: '/src/img/ledZeppelin-mothership.jpg'
    }
  ]

  /*async function fetchingData() {
    try{
      const dataFetched = await getData();
    } catch (err) {
      console.log(err);
    }
  }
  fetchingData();*/

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