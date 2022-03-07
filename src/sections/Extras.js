import {Box, Heading, Text, Flex} from '@chakra-ui/react'
import ExtrasItem from '../components/ExtrasItem';
import {extras} from '../assets/img/extras/extraImages'
import {secondaryDark} from '../variables/Colors'

const Extras = () => {


    return ( 
        <Box
        py={{
            base:'5rem',
            md:'7rem',
            lg:'8rem',
            xl:'9rem'
        }}
        >
            <Box
            textAlign='center'
            mb={{
                base:'3rem',
                sm:'1.5rem',
                md:'1rem'
            }}
            >
                <Heading 
                size='lg' 
                mb='4'
                >Endless Extras</Heading>
                <Text
                px='4'
                maxW={{
                    base:'35ch',
                    sm:'60ch',
                    md:'55ch',
                    lg:'80ch'
                }}
                mx='auto'
                fontSize='0.9rem'
                fontWeight='semibold'
                color={secondaryDark}
                >Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</Text>
            </Box>
            
            <Box>
                <Flex
                flexDirection={['column','column','row','row']}
                justifyContent='center'
                rowGap='4rem'
                columnGap={{
                    md:'6',
                    lg:'10',
                    xl:'4rem'
                }}
                >
                    
                    {extras.map((extra)=>{
                        return(
                            <Box
                            >
                                <ExtrasItem
                                img={extra.img} 
                                title={extra.title} 
                                desc={extra.desc} />
                            </Box>
                        )
                    })}
                </Flex>
            </Box>
        </Box>
     );
}
 
export default Extras;