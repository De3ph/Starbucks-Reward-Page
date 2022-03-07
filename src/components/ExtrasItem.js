import {Text, Image, Flex} from '@chakra-ui/react'
import {primaryGreen} from '../variables/Colors'

const ExtrasItem = ({img, title, desc}) => {
    return ( 
        <Flex
        columnGap='4'
        h='100%'
        flexDirection={['row','row','column','column']}
        justifyContent='center'
        >
            
            <Image
            objectFit='contain'
            alignSelf={['flex-start','flex-start','auto','auto']}
            justifySelf={['flex-start','flex-start','auto','auto']}
            mx={{
                md:'auto'
            }}
            w={{
                base:'35%',
                sm:'20%',
                md:'80%'
            }}
            h='30%'
            src={img} 
            borderRadius='full' 
            alt='extras' 
            />


            <Flex
            flexDir='column'
            w={{
                base:'100%',
                sm:'100%',
                lg:'100%'
            }}
            h='50%'
            mx='auto'
            textAlign={['left','left','center','center']}
            >
                <Text
                fontWeight='semibold'
                fontSize='xl'
                >{title}</Text>

                <Text
                mt={{
                    base:'4',
                    sm:'4'
                }}
                mx={{
                    md:'auto'
                }}
                maxW={{
                    md:'25ch',
                    lg:'32ch',
                    xl:'43ch'
                }}
                >{desc}</Text>


                <Text
                mt={{
                    base:'4',
                    md:'4'
                }}
                as='u' 
                _hover={{
                    textDecoration:'none'
                }}
                color={primaryGreen}
                fontWeight='semibold'
                >Learn More</Text>
            </Flex>
        </Flex>
     );
}
 
export default ExtrasItem;