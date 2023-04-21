import React from 'react'
import { SimpleGrid, GridItem, FormControl, FormLabel, Input, Flex, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


export default function PaymentForm() {
    const navigate = useNavigate();

    return (
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Card Number</FormLabel>
                    <Input type="text" />
                </FormControl>
                <Flex gap='0.5rem'>
                    <FormControl>
                        <FormLabel>Expiration Date</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>CVV</FormLabel>
                        <Input type="text" />
                    </FormControl>
                </Flex>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                    <FormLabel>Holder Name</FormLabel>
                    <Input type="text" />
                </FormControl>
                <Flex justifyContent='right'>
                    <Button mt="8" onClick={() => navigate('/billing')}>
                        Submit
                    </Button>
                </Flex>
            </GridItem>
        </SimpleGrid>
    )
}
