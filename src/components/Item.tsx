import React, { useCallback } from 'react'
import { Flex, Box, Spacer, Image, Heading, HStack, CloseButton } from '@chakra-ui/react'
import type { CartItem } from 'types/CartItem'

type ItemProps = {
    item: CartItem
    onRemove: (id: string) => void
}

export default function Item({ item, onRemove }: ItemProps) {
    const handleRemoveClick = useCallback(() => {
        onRemove(item.id);
    }, [item.id, onRemove]);

    return (
        <HStack>
            <Image src={item.thumbnailUri} alt='Thumbnail' borderRadius='2xl' p='0.5rem' w="16" />
            <Heading size='sm'>{item.name}</Heading>
            <Spacer />
            <Box p='4'>
                {item.salePrice ? (
                    <Flex direction='row'>
                        <Heading size='sm' color='gray.400' textDecoration='line-through' mr='2'>
                            ${item.price}
                        </Heading>
                        <Heading size='sm'>${item.salePrice}</Heading>
                    </Flex>
                ) : (
                    <Heading size='sm'>${item.price}</Heading>
                )}
            </Box>
            <CloseButton aria-label="Close" onClick={handleRemoveClick} />
        </HStack>
    )
}