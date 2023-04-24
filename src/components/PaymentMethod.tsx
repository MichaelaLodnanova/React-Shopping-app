import React from 'react'
import { Container, Heading, Card, CardHeader, CardBody, CardFooter, Box, Accordion, AccordionButton, AccordionItem, AccordionPanel } from '@chakra-ui/react'
import PaymentForm from './PaymentForm'
import type { PaymentMethod } from 'types/PaymentMethod'
import { useNavigate } from 'react-router-dom';

export default function PaymentMethod() {
    const navigate = useNavigate();

    return (
        <Container maxW="2xl">
            <Heading size="sm" padding="1.5">
                Select payment method
            </Heading>
            <Card size="lg" w="100%" bgGradient='linear(gray.700 3%, gray.500 25%, white 100%)'>
                <CardHeader>
                </CardHeader>
                <CardBody minHeight="300px">
                    <Accordion>
                        <AccordionItem>
                            <AccordionButton>
                                <Box>Mastercard/Visa</Box>
                            </AccordionButton>
                            <AccordionPanel>
                                <PaymentForm />
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton onClick={() => navigate('/billing')}>
                                <Box>Apple Pay</Box>
                            </AccordionButton>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton onClick={() => navigate('/billing')}>
                                <Box>Google Pay</Box>
                            </AccordionButton>
                        </AccordionItem>
                    </Accordion>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
        </Container>
    )
}
