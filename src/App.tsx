import type { FC } from 'react';
import { ChakraProvider, extendTheme, Center } from '@chakra-ui/react'
import ShoppingCart from 'components/ShoppingCart';
import { Routes, Route, BrowserRouter } from "react-router-dom";
// Use this import to load the cart content
import cart from 'assets/cart.json';
// Use this import to load the list of users who can receive a gift from you
import userlist from 'assets/gift_recipients.json';
import SelectRecipient from 'components/SelectRecipient';
import Breadcrumbs from 'components/Breadcrumbs';
import PaymentMethod from 'components/PaymentMethod';
import Billing from 'components/Billing';
import OrderAccepted from 'components/OrderAccepted';

export type AppProps = {};

const theme = extendTheme({
  config: { initialColorMode: 'dark' },

})

export const App: FC<AppProps> = () => {
  return (
    <ChakraProvider theme={theme}>
      <Breadcrumbs></Breadcrumbs>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={
            <Center p='4' color='white' width='100dvw' height='100dvh'>
              <ShoppingCart cart={cart} heading="Your shopping cart"></ShoppingCart>
            </Center>
          }></Route>

          <Route path='/gift' element={
            <Center p='4' color='white' width='100dvw' height='100dvh'>
              <SelectRecipient recipients={userlist}></SelectRecipient>
            </Center>
          } />
          <Route path='/payment-method' element={
            <Center p='4' color='white' width='100dvw' height='100dvh'>
              <PaymentMethod></PaymentMethod>
            </Center>
          } />
          <Route path='/billing' element={
            <Center p='4' color='white' width='100dvw' height='100dvh'>
              <Billing></Billing>
            </Center>
          } />
          <Route path='/done' element={
            <Center p='4' color='white' width='100dvw' height='100dvh'>
              <OrderAccepted></OrderAccepted>
            </Center>
          } />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
