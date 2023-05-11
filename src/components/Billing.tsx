import {
  Card,
  Container,
  CardFooter,
  CardBody,
  Heading,
  CardHeader,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Box,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { billingValidationSchema } from 'zod_schemas/billingValidationSchema';
import { z } from 'zod';

import 'styles.css';
type ValidationSchema = z.infer<typeof billingValidationSchema>;

export default function Billing() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(billingValidationSchema),
  });

  const onSumbit = (data: ValidationSchema) => {
    console.log(data);
    navigate('/done');
  };

  return (
    <Container maxW="3xl">
      <Heading size="sm" padding="1.5">
        Fill in billing info
      </Heading>

      <form onSubmit={handleSubmit(onSumbit)}>
        <Card size="lg" w="100%" bg="orange.50" marginBottom="4">
          <CardHeader paddingX="14" paddingBottom="0">
            <SimpleGrid>
              <GridItem paddingY="2">
                <Flex display="flex">
                  <FormLabel flex={1} paddingY="2">
                    Name and surname:{' '}
                  </FormLabel>
                  <FormControl
                    flex={2}
                    textAlign="center"
                    isInvalid={
                      errors.name_sruname != undefined ? true : undefined
                    }
                  >
                    <Input {...register('name_sruname')}></Input>
                    <FormErrorMessage fontSize="sm" color="red">
                      {errors.name_sruname?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Box flex={1}></Box>
                </Flex>
              </GridItem>
              <GridItem paddingY="2">
                <Flex display="flex">
                  <FormLabel flex={1} paddingY="2">
                    Email:{' '}
                  </FormLabel>
                  <FormControl
                    flex={2}
                    textAlign="center"
                    isInvalid={errors.email != undefined ? true : undefined}
                  >
                    <Input {...register('email')}></Input>
                    <FormErrorMessage fontSize="sm" color="red">
                      {errors.email?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Box flex={1}></Box>
                </Flex>
              </GridItem>
              <GridItem paddingY="2">
                <Flex display="flex">
                  <FormLabel flex={1} paddingY="2">
                    Phone number:{' '}
                  </FormLabel>
                  <FormControl
                    flex={2}
                    textAlign="center"
                    isInvalid={errors.phone != undefined ? true : undefined}
                  >
                    <Input {...register('phone')}></Input>
                    <FormErrorMessage fontSize="sm" color="red">
                      {errors.phone?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <Box flex={1}></Box>
                </Flex>
              </GridItem>
            </SimpleGrid>
          </CardHeader>
          <CardBody maxHeight="300px" paddingY="4">
            <Container maxW="2xl">
              <Heading size="sm" padding="1.5">
                Billing address:
              </Heading>
              <Card
                size="lg"
                w="100%"
                border="1px solid grey"
                bg="blackAlpha.700"
              >
                <CardHeader paddingBottom="0">
                  <FormControl
                    padding="2"
                    isInvalid={errors.address != undefined ? true : undefined}
                  >
                    <Input
                      type="text"
                      color="white"
                      placeholder="Address"
                      {...register('address')}
                      _placeholder={{ color: 'beige' }}
                    ></Input>
                    <FormErrorMessage fontSize="sm" color="red">
                      {errors.address?.message}
                    </FormErrorMessage>
                  </FormControl>
                </CardHeader>
                <CardBody maxHeight="300px">
                  <SimpleGrid columns={2} w="full">
                    <GridItem colSpan={1}>
                      <Flex display="flex" padding="2">
                        <FormControl
                          textAlign="center"
                          isInvalid={
                            errors.city != undefined ? true : undefined
                          }
                        >
                          <Input
                            type="text"
                            color="white"
                            placeholder="City"
                            {...register('city')}
                            _placeholder={{ color: 'beige' }}
                          />
                          <FormErrorMessage fontSize="sm" color="red">
                            {errors.city?.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Flex>
                      <Flex display="flex" padding="2">
                        <FormControl textAlign="center">
                          <Select placeholder="Select country" color="beige">
                            <option>Czech republic</option>
                            <option>Slovakia</option>
                          </Select>
                        </FormControl>
                      </Flex>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Flex display="flex" padding="2">
                        <FormControl
                          textAlign="center"
                          isInvalid={
                            errors.state != undefined ? true : undefined
                          }
                        >
                          <Input
                            color="white"
                            placeholder="State/Province"
                            {...register('state')}
                            _placeholder={{ color: 'beige' }}
                          ></Input>
                          <FormErrorMessage fontSize="sm" color="red">
                            {errors.state?.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Flex>
                      <Flex display="flex" padding="2">
                        <FormControl
                          textAlign="center"
                          isInvalid={errors.zip != undefined ? true : undefined}
                        >
                          <Input
                            color="white"
                            placeholder="Zip code"
                            {...register('zip')}
                            _placeholder={{ color: 'beige' }}
                          ></Input>
                          <FormErrorMessage fontSize="sm" color="red">
                            {errors.zip?.message}
                          </FormErrorMessage>
                        </FormControl>
                      </Flex>
                    </GridItem>
                  </SimpleGrid>
                </CardBody>
              </Card>
            </Container>
          </CardBody>
          <CardFooter paddingTop="7" justifyContent="right">
            <Button type="submit">Place order</Button>
          </CardFooter>
        </Card>
      </form>
    </Container>
  );
}
