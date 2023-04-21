import React from 'react'
import type { GiftRecipient } from 'types/GiftRecipient'
import { HStack, Heading, Spacer, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

type RecipientProps = {
    recipient: GiftRecipient
}

const Recipient = React.memo(({ recipient }: RecipientProps) => {
    const navigate = useNavigate();

    return (
        <HStack>
            <Image src={recipient.avatarUri} alt='Avatar' borderRadius='2xl' p='0.5rem' w="16" />
            <Heading size='sm'>{recipient.name}</Heading>
            <Spacer />
            <IconButton
                aria-label="Next"
                icon={<ChevronRightIcon />}
                size="md"
                variant="outline"
                onClick={() => navigate('/payment-method')}
            />
        </HStack>
    )
})


export default Recipient;
