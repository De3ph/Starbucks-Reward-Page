import { Text, Box, VStack, StackDivider} from "@chakra-ui/react";
import { payments } from "../assets/img/payments/paymentImage";
import PaymentItem from "../components/PaymentItem";
import { secondaryLight } from "../variables/Colors";

const Payment = () => {
    return (
        <VStack
        py='5rem'
        bgColor={secondaryLight}
        >

            <Box
            textAlign='center'
            mb='3rem'
            >
                <Text
                fontWeight='semibold'
                fontSize='2xl'
                mb={4}
                >Cash or card, you earn Stars</Text>

                <Text
                mx='auto'
                maxW='55ch'
                >No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</Text>
            </Box>

            <VStack
            divider={<StackDivider borderColor='black' />}
            >
                    
            </VStack>

        </VStack>
    );
}

export default Payment;

/*
<Flex flexDir='column'>

                <Flex
                    p={5}
                    flexDir={{
                        base:'column',
                        lg:'row'
                    }}
                >
                    <Box
                    w='35%'
                    >
                        <Text
                        fontWeight='semibold'
                        fontSize='lg'
                        >1★Star per dollar</Text>
                        <Text>Pay as you go</Text>
                    </Box>

                    <Flex
                    flexDir={{
                        base:'column',
                        md:'row'
                    }}
                    >
                        <PaymentItem paymentObject={payments[0]} />
                        <PaymentItem paymentObject={payments[1]} />
                    </Flex>

                </Flex>

                <Flex
                    p={5}
                    flexDir={{
                        base:'column',
                        lg:'row'
                    }}
                >

                    <Box
                    w='35%'
                    >
                        <Text
                        fontWeight='semibold'
                        fontSize='lg'
                        >2★ per dollar</Text>
                        <Text>Add funds in the app</Text>
                    </Box>

                    <Flex
                    flexDir={{
                        base:'column',
                        md:'row'
                    }}>
                        <PaymentItem paymentObject={payments[2]} />
                        <PaymentItem paymentObject={payments[3]} />
                    </Flex>

                </Flex>

                <Flex
                    p={5}
                    flexDir={{
                        base:'column',
                        lg:'row'
                    }}
                >

                    <Box
                    w='35%'
                    >
                        <Text
                        fontWeight='semibold'
                        fontSize='lg'
                        >3★ per dollar</Text>
                        <Text>With Starbucks® Rewards Visa® Card</Text>
                    </Box>

                    <Flex
                    flexDir={{
                        base:'column',
                        md:'row'
                    }}>
                        <PaymentItem paymentObject={payments[4]} />
                    </Flex>

                </Flex>
            </Flex>
*/