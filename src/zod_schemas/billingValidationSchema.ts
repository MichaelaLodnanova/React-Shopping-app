import { z } from 'zod';
export const billingValidationSchema = z.object({
  name_sruname: z.string().min(3, 'Name and surname required'),
  email: z.string().email('Invalid format'),
  phone: z.string().length(9, 'Invalid format'),
  address: z.string().min(3, 'Address required'),
  city: z.string().min(3, 'City required'),
  state: z.string().min(3, 'Sate required'),
  zip: z.string().length(6, 'Required format: XXX XX'),
});
