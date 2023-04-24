import React from 'react'
import { SimpleGrid, GridItem, FormControl, FormLabel, Input, Flex, Button, FormErrorMessage } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const validationSchema = z.object({
    cardNumber: z.string().length(16, 'Card number must be 16 digits'),
    expirationDate: z.string().regex(/\d\d\/\d\sd/, "Expiration date must have the follwoing format: XX/XX"),
    cvv: z.string().length(3, 'CVV must be 3 digits'),
    holderName: z.string().min(3, 'Holder name must be at least 3 characters'),
})

type ValidationSchema = z.infer<typeof validationSchema>;


export default function PaymentForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
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