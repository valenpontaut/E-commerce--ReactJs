/*The NavBar component is the page's navbar that contains the CartWidget component and the e-commerce products categories*/

import CartWidget from "./CartWidget"
import { 
  Container,
  Flex, 
  Spacer,
  Box, 
  Center, 
  Button,
  Stack, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { NavLink, Link} from "react-router-dom"
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState, useEffect } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";

const NavBar = () => {
  const [category,setCategory] = useState([])
  const db = getFirestore();

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "categories"));
      setCategory(querySnapshot.docs.map((doc) => doc.data().category));
    }
    fetchData();
  }, []);
  
  return (
    <>
    <Container bg='#0D1821' maxW={'100vw'}>
        <Flex alignContent='center'>
            <Box className="NavBar_box-title" pl={5}>
                <Link to={'/'}><div>M<span className="font-link">you</span>sic</div></Link>
            </Box>
            <Spacer/>
            <Stack direction='row' spacing={9} align='center'>
              <Link to={`/`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid' w={'10rem'}>
                  Home
                </Button>
              </Link>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='#B3AF8F' w={'10rem'}>
                  Our products
                </MenuButton>
                <MenuList>
                  {category?.map((cat) =>
                    (<NavLink key={cat} to={`/category/${cat}`}><MenuItem>{cat}s</MenuItem></NavLink>))}
                </MenuList>
              </Menu>
              <Link to={`/findUs`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid' w={'10rem'}>
                  Where to find us
                </Button>
              </Link>
              <Link to={`/aboutUs`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid' w={'10rem'}>
                  About us
                </Button>
              </Link>
              <Link to={`/contactUs`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid' w={'10rem'}>
                  Contact us
                </Button>
              </Link>
            </Stack>
            <Spacer/>
            <Center>
              <Link to={'/cart'}><Box className="NavBar_box-CartWidget" pe={5}>
                  <Center><CartWidget/></Center>
              </Box></Link>
            </Center>
        </Flex>   
    </Container>
    </>
  )
}

export default NavBar
