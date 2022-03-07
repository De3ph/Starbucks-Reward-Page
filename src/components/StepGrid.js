import { GridItem, Circle, Text, Box, Heading, Flex } from '@chakra-ui/react'
//secondary green prop olarak gelen chakraText lerde var
// eslint-disable-next-line no-unused-vars
import { primaryGreen, secondaryGreen } from '../variables/Colors'

function StepGrid({ stepNumber , title, chakraText}) {
    return (
        <GridItem
            bg='white'
        >
            <Flex
                direction={['row','row','column','column']}
                alignItems='center'
                p='4'
                gap='5'
            >
                <Circle
                    border='2px solid'
                    borderColor={primaryGreen}
                    color={primaryGreen}
                    bgColor='transparent'
                    size={'3rem'}
                > <Text fontSize='1.5rem'>{stepNumber}</Text></Circle>
                <Box>
                    <Heading textAlign={['left','left','center','center']} size='md' mb='4' >{title}</Heading>
                    {chakraText}
                </Box>
            </Flex>
        </GridItem>
    );
}

export default StepGrid;