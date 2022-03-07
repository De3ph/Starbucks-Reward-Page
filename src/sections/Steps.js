import { Box, Flex, Text, Grid} from '@chakra-ui/react'
import { secondaryGreen } from '../variables/Colors'
import StepGrid from '../components/StepGrid'
function Steps() {

    const firstChakraText = (<Text align={['left','left','center','center']}>To get started, <Text as='u' color={secondaryGreen} _hover={{
        textDecoration: 'none'
    }} >join now</Text>. You can also <Text as='u' color={secondaryGreen} _hover={{
        textDecoration: 'none'
    }} >join in the app</Text> to get access to the full range of Starbucks® Rewards benefits.</Text>);

    const secondChakraText = (<Text align={['left','left','center','center']}>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. 
    <Text as='u' color={secondaryGreen} _hover={{
        textDecoration: 'none'
    }}> Learn how</Text></Text>);

    const thirdChakraText = (<Text align={['left','left','center','center']}>As you earn Stars, you can redeem them for Rewards— like free food, drinks, and more. Start redeeming with as little as 25 Stars!</Text>);

    return (
        <Box 
        py={{
            base:'4rem',
            md:'6rem'
        }}
        >
            <Box
                px={{
                    base:'1rem',
                    sm:'3rem',
                    md:'4rem',
                    lg:'6rem',
                }}
            >
                <Box
                    h='30%'
                    textAlign='center'
                    mb='4rem'
                >
                    <Text
                        fontSize='3xl'
                        fontWeight='semibold'
                        mb='3'
                    >Getting started is easy</Text>
                    <Text
                    >Earn Stars and get rewarded in a few easy steps.</Text>
                </Box>

                <Box
                    h='70%'
                >
                    <Flex>
                        <Grid
                            templateColumns={'repeat(3, 1fr)'}
                            h='100%'
                            w='100%'
                            display={['flex','flex','grid','grid']}
                            flexDir='column'
                        >

                            <StepGrid stepNumber='1' title='Create an account' chakraText={firstChakraText} />

                            <StepGrid stepNumber='2' title='Order and pay how you’d like' chakraText={secondChakraText} />

                            <StepGrid stepNumber='3' title='Earn Stars, get Rewards' chakraText={thirdChakraText} />
                            
                        </Grid>
                    </Flex>
                </Box>

            </Box>
        </Box>
    );
}

export default Steps;