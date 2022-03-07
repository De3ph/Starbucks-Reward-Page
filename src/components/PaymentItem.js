import { Box, Flex, Text, Image } from "@chakra-ui/react";

const PaymentItem = ({paymentObject}) => {
    return (
            <Box
            w={{
                lg:'50%'
            }}
            >
                <Flex>
                    <Box>
                        <Image src={paymentObject.img} />
                    </Box>
                    <Box>
                        <Text>{paymentObject.title}</Text>
                        <Text>{paymentObject.desc}</Text>
                    </Box>
                </Flex>
            </Box>
     );
}
 
export default PaymentItem;