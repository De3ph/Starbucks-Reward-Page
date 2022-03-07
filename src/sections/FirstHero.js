import { Box, Button, Flex, Text } from "@chakra-ui/react";
import starbucksSvg from '../assets/svg/starbucks.svg'
import {primaryGreen, secondaryLight} from '../variables/Colors'

function FirstHero() {
    return (

        <Box
            pos={'relative'}
            display={{
                base:'block',
                md:'flex'
            }}
            w='100vw'
            h={{
                base:'33rem',
                sm:'38rem',
                md:'25rem',
                lg:'40rem',
                xl:'45rem'
            }}
        >

            <Box
            alignSelf='center'
            justifySelf='center'
            px={{
                sm:'3',
                md:'4',
                lg:'5rem',
                xl:'12rem'
            }}
            py={{
                base:'4',
                sm:'4',
                md:'4',
                lg:'6',
                xl:'8'
            }}
            >
                <Flex
                    flexDir='column'
                    gap='4'
                    textAlign={{
                        'base':"center",
                        'sm':"center",
                        'md':"left",
                    }}
                >
                    <Box
                        p={['2', '2', '4', '6']}
                    >

                        <Box>
                            <Text
                                textTransform='uppercase'
                                fontWeight='semibold'
                                fontSize={{
                                    base:'3xl',
                                    lg:'4xl'
                                }}
                            >
                                free coffee
                            </Text>
                            <Text
                                textTransform='uppercase'
                                fontWeight='semibold'
                                fontSize={{
                                    base:'3xl',
                                    lg:'4xl'
                                }}
                            >
                                is a tap away
                            </Text>
                        </Box>
                        
                        <Text fontSize='large' mt={4} >
                            Join now to start earning Rewards.
                        </Text>

                    </Box>
                    
                    <Box
                    // w='100%'
                    px={['2', '2', '4', '6']}
                    >
                        <Button 
                        _hover={{
                            backgroundColor:'#158159'
                        }}
                        borderRadius='full' 
                        color='white' 
                        bg={primaryGreen}
                        >Join Now</Button>
                        <Text mt={3} >Or <Text as='u' _hover={{
                            cursor:'pointer',
                            textDecoration:'none'
                        }}>join in the app</Text> for the best experience</Text>
                    </Box>

                </Flex>
            
            </Box>

            <Box
                pos={'absolute'}
                top='0px'
                zIndex='-1'
                bgColor={secondaryLight}
                bgImage={starbucksSvg}
                bgSize={{
                    base:'60%',
                    sm:'45%',
                    md:'45%',
                    lg:'50%',
                    xl:'50%'
                }}
                bgPos={['bottom', 'bottom', 'right bottom', 'right']}
                bgRepeat={'no-repeat'}
                w='100%'
                h='100%'
            >
            </Box>

        </Box>





                
    );
}

export default FirstHero;