import { Card, Container, CardFooter, CardBody, Heading, CardHeader, SimpleGrid, GridItem, FormControl, FormLabel, Input, Flex, Button, Box } from '@chakra-ui/react'
import React from 'react'
import BillingAddress from './BillingAddress'
import { useNavigate } from 'react-router-dom';

export default function Billing() {
    const navigate = useNavigate();
    return (
        <Container maxW="3xl">
            <Heading size="sm" padding="1.5">
                Fill in billing info
            </Heading>
            <Card size="lg" w="100%" bgGradient='linear(gray.700 3%, gray.500 25%, white 100%)'>
                <CardHeader paddingX='14' paddingBottom='0'>
                    <SimpleGrid>
                        <GridItem paddingY='2'>
                            <Flex display="flex">
                                <FormLabel flex={1} paddingY='2'>Name and surname: </FormLabel>
                                <FormControl flex={2} textAlign='center'><Input></Input></FormControl>
                                <Box flex={1}></Box>
                            </Flex>
                        </GridItem>
                        <GridItem paddingY='2'>
                            <Flex display="flex">
                                <FormLabel flex={1} paddingY='2'>Email: </FormLabel>
                                <FormControl flex={2} textAlign='center' ><Input></Input></FormControl>
                                <Box flex={1}></Box>
                            </Flex>
                        </GridItem>
                        <GridItem paddingY='2'>
                            <Flex display="flex">
                                <FormLabel flex={1} paddingY='2'>Phone number: </FormLabel>
                                <FormControl flex={2} textAlign='center'><Input></Input></FormControl>
                                <Box flex={1}></Box>
                            </Flex>
                        </GridItem>
                    </SimpleGrid>
                </CardHeader>
                <CardBody maxHeight="300px" paddingY='4'>
                    <BillingAddress></BillingAddress>
                </CardBody>
                <CardFooter paddingTop='7' justifyContent='right'>
                    <Button onClick={() => navigate('/done')}>Place order</Button>
                </CardFooter>
            </Card>
        </Container>
    )
}
