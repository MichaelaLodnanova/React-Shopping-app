import { SimpleGrid, GridItem, FormControl, FormLabel, Input, Flex, Button, FormErrorMessage } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentValidationSchema } from 'zod_schemas/paymentValidationSchema';
import { z } from "zod";
type ValidationSchema = z.infer<typeof paymentValidationSchema>;


export default function PaymentForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchema>({
        resolver: zodResolver(paymentValidationSchema),
    });

    const onSubmit = (data: ValidationSchema) => {
        console.log(data);
        navigate('/billing');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl isInvalid={errors.cardNumber != undefined ? true : undefined}>
                        <FormLabel>Card Number</FormLabel>
                        <Input type="text" {...register("cardNumber")} />
                        <FormErrorMessage fontSize="sm" color="red">{errors.cardNumber?.message}</FormErrorMessage>
                    </FormControl>
                    <Flex gap='0.5rem'>
                        <FormControl isInvalid={errors.expirationDate != undefined ? true : undefined}>
                            <FormLabel>Expiration Date</FormLabel>
                            <Input type="text" {...register("expirationDate")} />
                            <FormErrorMessage fontSize="sm" color="red">{errors.expirationDate?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.cvv != undefined ? true : undefined}>
                            <FormLabel>CVV</FormLabel>
                            <Input type="text" {...register("cvv")} />
                            <FormErrorMessage fontSize="sm" color="red">{errors.cvv?.message}</FormErrorMessage>
                        </FormControl>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl isInvalid={errors.holderName != undefined ? true : undefined}>
                        <FormLabel>Holder Name</FormLabel>
                        <Input type="text" {...register("holderName")} />
                        <FormErrorMessage fontSize="sm" color="red">{errors.holderName?.message}</FormErrorMessage>
                    </FormControl>
                    <Flex justifyContent='right'>
                        <Button mt="8" type="submit">
                            Submit
                        </Button>
                    </Flex>
                </GridItem>
            </SimpleGrid>
        </form>
    )
}