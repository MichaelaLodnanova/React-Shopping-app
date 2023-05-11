import type { FC } from 'react';
import { ChakraProvider, extendTheme, Box, Center, Flex, HStack, VStack, Divider } from '@chakra-ui/react'
import ShoppingCart from 'components/ShoppingCart';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Use this import to load the cart content
import cart from 'assets/cart.json';
// Use this import to load the list of users who can receive a gift from you
import userlist from 'assets/gift_recipients.json';
import SelectRecipient from 'components/SelectRecipient';
import PaymentMethod from 'components/PaymentMethod';
import Billing from 'components/Billing';
import OrderAccepted from 'components/OrderAccepted';
import "styles.css";
import Breadcrumbs from 'components/Breadcrumbs';
import type { BreadcrumbsProps } from 'types/BreadCrumbs';
export type AppProps = {};

const theme = extendTheme({
  config: { initialColorMode: 'light' },
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Raleway, sans-serif",
  },
  fontWeights: {
    normal: 200,
    medium: 300,
    bold: 500,
  },
  styles: {
    global: () => ({
      body: {
        bgGradient: 'linear(to-b, purple.300, #E6FFFA )'
      },
    }),
  },
})

export const App: FC<AppProps> = () => {
  return (
    <ChakraProvider theme={theme}>
      <VStack p='4' color='white' width='100dvw' height='100dvh'>
        <Box width="100%">
          <Breadcrumbs items={crumbs.items}></Breadcrumbs>
          <Divider></Divider>
        </Box>
        <Center flex={0.9}>
          <BrowserRouter>
            <Routes>
              <Route path='/'></Route>
              <Route path='/cart' element={
                <ShoppingCart cart={cart} heading="Your shopping cart"></ShoppingCart>
              }></Route>

              <Route path='/gift' element={
                <SelectRecipient recipients={userlist}></SelectRecipient>
              } />
              <Route path='/payment-method' element={
                <PaymentMethod></PaymentMethod>
              } />
              <Route path='/billing' element={
                <Billing></Billing>
              } />
              <Route path='/done' element={
                <OrderAccepted></OrderAccepted>
              } />
            </Routes>
          </BrowserRouter>
        </Center>
      </VStack>
    </ChakraProvider >
  );
};

const crumbs: BreadcrumbsProps = {
  items: [
    {
      label: "cart",
      link: "/cart"
    },
    {
      label: "gift to",
      link: "/gift"
    },
    {
      label: "payment",
      link: "/payment-method"
    },
    {
      label: "billing",
      link: "/billing"
    }
  ]
};