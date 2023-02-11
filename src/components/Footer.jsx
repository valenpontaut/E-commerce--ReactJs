/*The Footer component is the footer of the page*/

import {
    Box,
    Container,
    Flex,
    Spacer,
    Button,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {

  return (
    <Container bg='#0D1821' maxW={'100vw'} color='white'>
        <Flex alignContent='center'>
            <Box px='14' py='8'>
                <div>© 2023 Valentina Llanos Pontaut. All rights reserved</div>
            </Box>
            <Spacer/>
            <Box px='14' py='6'>
                <Link to={'https://www.instagram.com/'}>
                    <Button colorScheme='none' leftIcon={<FaInstagram fontSize='1.5rem' color='#66999B'/>}></Button>
                </Link>
                <Link to={'https://www.facebook.com/'}>
                    <Button colorScheme='none' leftIcon={<FaFacebook fontSize='1.5rem' color='#66999B'/>}></Button>
                </Link>
                <Link to={'https://www.twitter.com/'}>
                    <Button colorScheme='none' leftIcon={<FaTwitter fontSize='1.5rem' color='#66999B'/>}></Button>
                </Link>
                <Link to={'https://www.youtube.com/'}>
                    <Button colorScheme='none' leftIcon={<FaYoutube fontSize='1.5rem' color='#66999B'/>}></Button>
                </Link>
            </Box>
        </Flex>
    </Container>
  )
}

export default Footer