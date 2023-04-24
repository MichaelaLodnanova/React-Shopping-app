# Online Store Checkout Workflow Prototype

This is a prototype of an online store checkout workflow designed to simplify the process for users. The workflow consists of five steps based on the diagram in GitLab issues:

Step 1: Order Summary

    At this stage, the user can review the items in their cart along with the total cost.

Step 2 (Optional): Select Recipient

    If the user is buying a gift, they can choose the recipient from a searchable list of users.

Step 3: Select Payment Method

    The user can choose a payment method from a list of available options and enter the necessary information.

Step 4: Fill in Billing Information

    The user can enter their billing information, including name, email, phone number (optional), address, city, state/province, country, and zip code.

Step 5: Confirmation

    After completing the checkout process, the user will receive a confirmation message with a nice animation.

Users can move back and forth between steps using a back button, breadcrumbs, or a stepper. If the user chooses to gift their cart, going back will include the "Select Recipient" step, while skipping it when going back if the user is not gifting the cart.

Each step of the form includes specific features and fields to ensure a smooth checkout process, including proper validation of each field to prevent submission of incomplete or erroneous information. For instance:

    Step 1: Order Summary
        The user's cart
        The total price
        A button to buy the items for themselves
        A button to buy the items as a gift

    Step 2: Select Recipient
        A search bar to filter the list of users
        A list of users

    Step 3: Select Payment Method
        A list of payment methods, including at least Credit Card and two others
        A form to fill in credit card information, including card number, holder's name, expiration date, and CVV.

    Step 4: Fill in Billing Information
        A form to fill in the user's billing information, including name, email, phone number (optional), address, city, state/province, country, and zip code.

    Step 5: Confirmation
        A confirmation message
