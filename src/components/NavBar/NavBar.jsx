import CartWidget from "../CartWidget"
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
import {ChevronDownIcon} from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <>
    <Container bg='#0D1821' maxW={'100vw'}>
        <Flex alignContent='center'>
            <Box className="NavBar_box-title" pl={5}>
                <a href="#"><div>M<span className="font-link">you</span>sic</div></a>
            </Box>
            <Spacer/>
            <Stack direction='row' spacing={9} align='center'>
              <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='#B3AF8F'>
                Our products
              </MenuButton>
              <MenuList>
                <a href="#"><MenuItem>CD's</MenuItem></a>
                <a href="#"><MenuItem>Vinilos</MenuItem></a>
                <a href="#"><MenuItem>DVD's</MenuItem></a>
                <a href="#"><MenuItem>Libros</MenuItem></a>
              </MenuList>
              </Menu>
              <a href="#">
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
                  Where to find us?
                </Button>
              </a>
              <a href="#">
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
                  About us
                </Button>
              </a>
              <a href="#">
                <Button className="NavBar_btn-categories" bg='#B3AF8F' variant='solid'>
                  Contact us
                </Button>
              </a>
            </Stack>
            <Spacer/>
            <Center>
              <a href="#"><Box className="NavBar_box-CartWidget" pe={5}>
                  <Center><CartWidget/></Center>
              </Box></a>
            </Center>
        </Flex>   
    </Container>
    </>
  )
}

export default NavBar