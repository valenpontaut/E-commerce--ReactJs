/*The ItemListContainer component takes from the database the info of the selected category to send it to the ItemList component*/

import { Container } from '@chakra-ui/react'
import React, {useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from './Loading';

const ItemListContainer = () => {
  const category = useParams();
  const [products, setProducts] = useState([]);
  const [items,setItems] = useState([])
  const db = getFirestore();
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
      
    }
    fetchData();
  }, []);
  const catFilter = products.filter((prod) => prod.category === category.id);

  if (items == []){
    setItems(products)
  }
  console.log('lalal',items)
  
    return (
      
      <Container className='body__Container'>
        {catFilter ? <ItemList products = {catFilter} /> : <ItemList products = {items}/>}
      </Container>
    )
 /*  const db = getFirestore();
  const itemCollection =  collection(db, "products");
  const getData () 
  firebase.firestore().collection('products').get() 
  getDocs (itemCollection)
    .then((snapshot) => {
      if (snapshot) {
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
          setProducts(docs)
          console.log(products)
      }
    })
    .catch((error) => {
      console.log('Error getting documents: ', error)
    }) */



    /* const db = getFirestore();
    const itemCollection =  collection(db, "products");
    getDocs (itemCollection).then((snapshot) => {
      if (snapshot) {
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
          setProducts(docs)
          console.log(products)
      }
    });
 

  const catFilter = products.filter((prod) => prod.category === category.id);
  console.log(catFilter)
  return (
    <Container className='body__Container'>
      {catFilter ? <ItemList products={catFilter}/> : <ItemList products={products}/>}
    </Container>
  ) */
  /* const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
            setLoading(false);
            console.log(items)
        });
    }, [id]);
    
    return (
        <div className="body__Container">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    ) */
  /* const category = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "products");

    //const q = category ? query(itemCollection, where ('category','==', category)) : itemCollection;
    getDocs (itemCollection).then((snapshot) => {
      if (snapshot) {
          const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
          const catFilter = docs.filter((prod) => prod.category === category.id);
          if (catFilter) {
            setProducts(catFilter)
          } else {
            setProducts(docs);
          }
          setLoading(false);
      }
    });
  }, []);

  const catFilter = products.filter((prod) => prod.category === category.id);
  console.log(products)
  return (
    <Container className='body__Container'>
      {loading ? <Loading/> : <ItemList products={products}/>}
    </Container>
  ) */

  /* if (category.id === undefined) {
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
  } */  
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