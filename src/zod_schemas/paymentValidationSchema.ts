import { z } from "zod";

export const paymentValidationSchema = z.object({
    cardNumber: z.string().length(16, 'Card number must be 16 digits'),
    expirationDate: z.string().regex(/\d\d\/\d\sd/, "Expiration date must have the follwoing format: XX/XX"),
    cvv: z.string().length(3, 'CVV must be 3 digits'),
    holderName: z.string().min(3, 'Holder name must be at least 3 characters'),
})