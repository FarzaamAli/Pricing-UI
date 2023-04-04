"use client";
import {Box,Text,Heading} from '@chakra-ui/react'
import { padding } from '@mui/system';
import React from 'react'

export default function top() {
  return (
    <>
   <Box textAlign={{base:"left" , md:"left", lg:"center"}} pl={"20px"} bg="#6B46C1" color={"white"} pt={"60px"} pb={"200px"} >
    <Heading pb={"20px"}>Simple Pricing For Your Business</Heading>
    <Text>Plans that are carefully crafted to suit your business</Text>
    
   </Box>
    </>
  );
}
