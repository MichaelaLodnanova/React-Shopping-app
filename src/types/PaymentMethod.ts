export type CreditCardPaymentMethod = {
  type: 'Credit Card';
  cardNumber: string;
  expirationDate: string;
  cvv: string;
};

export type GooglePayPaymentMethod = {
  type: 'Google Pay';
};

export type ApplePayPaymentMethod = {
  type: 'Apple Pay';
};

export type PaymentMethod =
  | CreditCardPaymentMethod
  | GooglePayPaymentMethod
  | ApplePayPaymentMethod;
