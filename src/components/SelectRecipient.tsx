import { useMemo, useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Container,
    Heading,
    VStack,
    StackDivider,
    CardFooter,
    InputGroup,
    InputLeftElement,
    Input,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import type { GiftRecipient } from 'types/GiftRecipient';
import Recipient from './Recipient';

type SelectRecipientProps = {
    recipients: GiftRecipient[];
};

export default function SelectRecipient(props: SelectRecipientProps) {
    const [recipients] = useState(props.recipients)
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const filteredRecipients = useMemo(() => recipients.filter((recipient) =>
        recipient.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
    ), [recipients, searchValue]);

    return (
        <Container maxW="2xl">
            <Heading size="sm" padding="1.5">
                Select recipient
            </Heading>
            <Card size="lg" w="100%" bgGradient='linear(gray.700 3%, gray.500 25%, white 100%)'>
                <CardHeader>
                    <InputGroup color="inherit">
                        <InputLeftElement pointerEvents="none"><FaSearch /></InputLeftElement>
                        <Input type="text" placeholder="Search" value={searchValue} onChange={handleSearchInputChange} />
                    </InputGroup>
                </CardHeader>
                <CardBody maxHeight="300px" overflowY="scroll" paddingX="16" paddingTop="0">
                    <VStack divider={<StackDivider borderColor="gray.200" />} align="stretch">
                        {filteredRecipients.map((x) => (
                            <Recipient key={x.id} recipient={x} />
                        ))}
                    </VStack>
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
        </Container>
    );
}