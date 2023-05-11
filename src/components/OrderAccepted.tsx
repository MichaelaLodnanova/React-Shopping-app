import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export default function OrderAccepted() {
  const navigate = useNavigate();
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  const animation = useSpring({
    transform: shouldAnimate ? 'translateY(-20px)' : 'translateY(0px)',
    config: {
      tension: 200,
      friction: 10,
      mass: 3,
    },
  });

  React.useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <Container maxW="2xl">
      <Heading size="sm" padding="1.5">
        Done
      </Heading>
      <Card size="lg" w="100%" backgroundColor={'orange.50'}>
        <CardHeader>
          <Heading size="lg" textAlign="center">
            Thank you for your purchase
          </Heading>
        </CardHeader>
        <CardBody maxHeight="300px" padding="0">
          <Flex justifyContent="center">
            <animated.div style={animation}>
              <MdCheckCircle size="18rem" />
            </animated.div>
          </Flex>
        </CardBody>
        <Divider></Divider>
        <CardFooter justifyContent="right">
          <Button onClick={() => navigate('/')}>Back to store</Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
