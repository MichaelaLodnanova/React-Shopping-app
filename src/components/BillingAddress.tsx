import { Input, Card, CardBody, CardHeader, Container, FormControl, Heading, SimpleGrid, GridItem, Flex, Select, Button } from '@chakra-ui/react'
import React from 'react'

export default function BillingAddress() {

    return (
        <Container maxW="2xl">
            <Heading size="sm" padding="1.5">
                Billing address:
            </Heading>
            <Card size="lg" w="100%" border="1px solid grey" bg='gray.700'>
                <CardHeader paddingBottom="0">
                    <FormControl padding="2">
                        <Input color='white' placeholder="Address"></Input>
                    </FormControl>
                </CardHeader>
                <CardBody maxHeight="300px">
                    <SimpleGrid columns={2} w="full">
                        <GridItem colSpan={1}>
                            <Flex display="flex" padding="2">
                                <FormControl isRequired textAlign="center">
                                    <Input color='white' placeholder="City"></Input>
                                </FormControl>
                            </Flex>
                            <Flex display="flex" padding="2">
                                <FormControl isRequired textAlign="center">
                                    <Select placeholder="Select country" color="grey">
                                        <option>Czech republic</option>
                                        <option>Slovakia</option>
                                    </Select>
                                </FormControl>
                            </Flex>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Flex display="flex" padding="2">
                                <FormControl textAlign="center">
                                    <Input color='white' placeholder="State/Province"></Input>
                                </FormControl>
                            </Flex>
                            <Flex display="flex" padding="2">
                                <FormControl isRequired textAlign="center">
                                    <Input color='white' placeholder="Zip code"></Input>
                                </FormControl>
                            </Flex>
                        </GridItem>
                    </SimpleGrid>
                </CardBody>
            </Card>
            <Button type="submit" mt="8">
                Submit
            </Button>
        </Container>
    );
}
