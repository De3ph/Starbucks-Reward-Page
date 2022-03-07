
import { Flex, Box, Image, Text, Container} from "@chakra-ui/react";
const TabItem = ({ image, title, desc }) => {
    return (
        <Flex
            py='5'
            justifyContent='center'
            flexDir={['column', 'column', 'row', 'row']}
        >

            <Box w={['100%','100%','40%','40%']} >
                <Image objectPosition='center' objectFit='cover' src={image} />
            </Box>

            <Box
            w={['100%','100%','60%','60%']} 
            display='flex'
            flexDirection='column'
            justifyContent='center'
            >
                <Container w={{
                    md:'38ch',
                    lg:'42ch',
                    xl:'42ch'
                }} >
                    <Text mb='4' textAlign={['center','center','left','left']} fontSize='2xl' fontWeight='medium'>{title}</Text>
                    <Text textAlign={['center','center','left','left']} >{desc}</Text>
                </Container>
            </Box>


        </Flex>
    );
}

export default TabItem;