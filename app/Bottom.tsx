import { Box, Flex, HStack ,Icon, Text} from '@chakra-ui/react'
import React from 'react'
import arrowcircle from './icons/arrowcircle'
import setupkey from './icons/setupkey'
import shield from './icons/shield'

export default function Bottom() {
  return (
    <Box margin={"auto"} maxWidth={'700px'} mt={"70px"} mb={"50px"}>
        <Flex direction={{base:"column",md:"column",lg:"row"}} alignItems={"center"}> 

        <HStack mb={"20px"}>
            <Icon as={shield}/>
            <Text fontWeight={"bold"}  >30 days money back Guarantee</Text>
        </HStack>
        <HStack mb={"20px"}>
            <Icon as={setupkey} />
            <Text fontWeight={"bold"} >No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb={"20px"}>
            <Icon as={arrowcircle} />
            <Text fontWeight={"bold"} >No setup fees 100% hassle-free</Text>
        </HStack>

        </Flex>
    </Box>
  )
}
