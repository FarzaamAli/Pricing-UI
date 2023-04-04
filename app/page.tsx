"use client";

// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
//const inter = Inter({ subsets: ['latin'] })
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Header from './Header';
import { Box } from '@mui/system';
import Middle from './Middle';
import Bottom from './Bottom';

export default function Home() {
  return (

    <ChakraProvider>
      <Header/>
      <Middle/>
      <Bottom/>
    </ChakraProvider>
  )
}
