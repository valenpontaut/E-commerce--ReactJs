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
import {ChevronDownIcon} from '@chakra-ui/icons'

const NavBar = () => {
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
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
                  Home
                </Button>
              </Link>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='#B3AF8F'>
                  Our products
                </MenuButton>
                <MenuList>
                  <NavLink to={`/category/${'CD'}`}><MenuItem>CD's</MenuItem></NavLink>
                  <NavLink to={`/category/${'Vinyl'}`}><MenuItem>Vinyls</MenuItem></NavLink>
                  <NavLink to={`/category/${'DVD'}`}><MenuItem>DVD's</MenuItem></NavLink>
                  <NavLink to={`/category/${'Book'}`}><MenuItem>Books</MenuItem></NavLink>
                </MenuList>
              </Menu>
              <Link to={`/findUs`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
                  Where to find us
                </Button>
              </Link>
              <Link to={`/aboutUs`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
                  About us
                </Button>
              </Link>
              <Link to={`/contactUs`}>
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
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
