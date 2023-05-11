import React from 'react';
import {
  Container,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import PaymentForm from './PaymentForm';
import { useNavigate } from 'react-router-dom';

export default function PaymentMethod() {
  const navigate = useNavigate();

  return (
    <Container minW="2xl">
      <Heading size="sm" padding="1.5">
        Select payment method
      </Heading>
      <Card size="lg" w="100%" bg="orange.50">
        <CardHeader></CardHeader>
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
  );
}
