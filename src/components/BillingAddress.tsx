import { Input, Card, CardBody, CardHeader, Container, FormControl, Heading, SimpleGrid, GridItem, Flex } from '@chakra-ui/react'
import React from 'react'

export default function BillingAddress() {
    return (
        <Container maxW="2xl">
            <Heading size="sm" padding="1.5">
                Billing address:
            </Heading>
            <Card size="lg" w="100%" border="1px solid grey" >
                <CardHeader paddingBottom='0'>
                    <FormControl padding='2'><Input placeholder='Address'></Input></FormControl>
                </CardHeader>
                <CardBody maxHeight="300px">
                    <SimpleGrid columns={2} w="full">
                        <GridItem colSpan={1}>
                            <Flex display="flex" padding='2'>
                                <FormControl textAlign='center'><Input placeholder='City'></Input></FormControl>
                            </Flex>
                            <Flex display="flex" padding='2'>
                                <FormControl textAlign='center'><Input placeholder='Country'></Input></FormControl>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Flex display="flex" padding='2'>
                                <FormControl textAlign='center'><Input placeholder='State/Province'></Input></FormControl>
                            </Flex>
                            <Flex display="flex" padding='2'>
                                <FormControl textAlign='center'><Input placeholder='Zip code'></Input></FormControl>
                            </Flex>
                        </GridItem>
                    </SimpleGrid>
                </CardBody>
            </Card>
        </Container >
    )
}
