# Store

A prototype a checkout workflow of an online store. The goal is to make the checkout process simpler for the user. 
## Specs

- The form will be composed of 5 steps according to the diagram in gitlab issues:

- Step 1: Order Summary
  - In this step the user will be able to review the items in their cart and the total price.
- Step 2 (optional): Select recipient
  - If the order is a gift, the user will be able to select the recipient from a list of users.
  - The list has to be searchable
- Step 3: Select payment method
  - The user will be able to select the payment method from a list of available payment methods and fill in the necessary information.
- Step 4: Fill in billing info
  - The user will be able to fill in their billing information.
- Step 5: Confirmation

  - The user will receive a confirmation message (a nice animation is appreciated).

- The user will be able to go back and forth between steps (at least a back button should be present in each step, for a better UX you would want to use **breadcrumbs** or a **stepper**, you are however not limited to these, as long as they make sense from a users' perspective).
  - However, when the user choses to gift his cart. Going back must include the *Select recipient* step. Likewise, the step must be skipped when going back if the user is not gifting the cart.

- Use proper validation for each field, and make sure the user can't submit the form if there are any errors on the current step.

- Each step of the form is required to contain the following:

  - Step 1: Order Summary
    - The user's cart
    - The total price
    - A button to buy the items for yourself
    - A button to buy the items as a gift
  - Step 2: Select recipient
    - A search bar to filter the list of users
    - A list of users
  - Step 3: Select payment method
    - A list of payment methods (At least Credit Card and 2 others)
    - A form to fill in the card information, if the user chooses to pay with a credit card (Card number, Holder's name, expiration date, CVV)
  - Step 4: Fill in billing info

    - A form to fill in the user's billing information, the fields are:

      - Name and surname (required)
      - Email (required)
      - Phone number (optional)

      - Address (required)
      - City (required)
      - State/province (required)
      - Country (required)
      - Zip code (required)

  - Step 5: Confirmation
    - A confirmation message
