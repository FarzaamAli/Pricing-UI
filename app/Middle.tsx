import { Box, Button, Flex, Heading, HStack, Text , Icon } from '@chakra-ui/react'
import React from 'react'
import check from './icons/check'

export default function Middle() {
  return (
    <Box 
    maxWidth={"950px"}
    mx={{base:"20px",lg:"auto"}}
    mt={"-150px"} 
    bg={"white"} 
    borderRadius={"20px"} 
    overflow={"hidden"}
    boxShadow={"0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 10px -5px rgba(0,0,0,0.04);"}
    
    >
        <Flex direction={{base:"column" , md:"column",lg:"row"}}>

        <Box p={"45px"} textAlign={"center"} bg={"#d0c7d9"} alignItems="center"  >
            <Text fontSize={"25px"} fontWeight={"bold"} >Premium PRO</Text>
            <Heading fontSize={"60px"}>$350</Heading>
            <Text >Just Once</Text>
            
            <Button  mt={"13px"} maxW={"250px"} bg="#6B46C1" color={"white"}  >Get Started</Button>
            
        </Box>
        <Box  pt={"60px"} pl={"30px"} pr={"10px"}>
            <Text mb={"15px"}>Access these features when you get this pricing package for your business.</Text>
            <HStack mb={"15px"}>
                <Icon as={check} />
                <Text>International calling and messaging API</Text>
            </HStack>
            <HStack mb={"15px"}>
                <Icon as={check} />
                <Text>Additional phone numbers</Text>
            </HStack>
            <HStack mb={"15px"}> 
                <Icon as={check} />
                <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack mb={"15px"}>
                <Icon as={check} />
                <Text>24/7 support and consulting</Text>
            </HStack>

        </Box>
        </Flex>
    </Box>
  )
}
