import React, { useState } from 'react';
import { Flex, Card, CardBody, CardFooter, Container, ButtonGroup, Button, VStack, Divider, Text, Spacer, CardHeader } from '@chakra-ui/react';
import { StackDivider, Heading } from '@chakra-ui/react';
import Item from './Item';
import type { CartItem } from 'types/CartItem';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';

type ShoppingCartProps = {
    cart: CartItem[];
    heading: string;
};

export default function ShoppingCart({ cart, heading }: ShoppingCartProps) {
    const [cartItems, setCartItems] = useState(cart);

    const removeItem = (id: string) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const getSalePrice = () => {
        const total = cartItems.reduce((acc, item) => acc + (item.salePrice ? item.salePrice : item.price) * item.quantity, 0);
        return total;
    };

    const getTotalPrice = () => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total;
    }

    const navigate = useNavigate();

    const slideInAnimation = useSpring({
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0%)' },
        config: { duration: 400 }
    });

    return (
        <animated.div style={slideInAnimation}>
            <Container maxW="2xl">
                <Heading size="sm" padding="1.5">
                    {heading}
                </Heading>
                <Card size="lg" w="100%" bg='orange.50'>
                    <CardHeader />
                    <CardBody maxHeight="300px" overflowY="scroll" paddingX='16' paddingTop="0">
                        <VStack divider={<StackDivider borderColor="gray.100" />} align='stretch'>
                            {cartItems.map((x) => (
                                <Item
                                    key={null}
                                    item={x}
                                    onRemove={() => removeItem(x.id)}
                                />
                            ))}
                        </VStack>
                    </CardBody>
                    <Divider borderColor='gray.100' />
                    <Spacer />
                    <Flex justifyContent='flex-end'>
                        <Text fontSize="m" fontStyle="italic" color="gray.400" padding='4' paddingRight='-1' textDecoration='line-through'>
                            ${getTotalPrice().toFixed(2)}
                        </Text>
                        <Text fontSize="large" fontStyle="italic" padding='4' paddingRight='10'>
                            ${getSalePrice().toFixed(2)}
                        </Text>
                    </Flex>
                    <CardFooter justifyContent="space-between" paddingTop='-1'>
                        <ButtonGroup variant="outline" spacing="6">
                            <Button _hover={{ bgColor: 'gray.100' }} colorScheme="black" onClick={() => navigate('/')}>Back to store</Button>
                            <Button _hover={{ bgColor: 'gray.100' }} colorScheme="black" onClick={() => navigate('/payment-method')}>Purchase</Button>
                        </ButtonGroup>
                        <ButtonGroup variant="outline">
                            <Button bgGradient='linear(to-r, orange.50, red.100)'
                                _hover={{
                                    bgGradient: 'linear(to-r, orange.50, red.200)',
                                }} colorScheme="black" onClick={() => navigate('/gift')}>Gift to</Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Container >
        </animated.div >
    );
}

