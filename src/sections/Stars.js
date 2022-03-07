import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import TabItem from "../components/TabItem";
import { primaryGreen, primaryLight, secondaryGreen, secondaryLight } from "../variables/Colors";
import { coffees } from '../assets/img/coffeeImages/coffeImages'
import { GrStar } from 'react-icons/gr'

const starNumbers = [25, 50, 150, 200, 400]

const Stars = () => {

    return (
        <Box>

            <Box w='100%'>

                <Tabs colorScheme={'green'}>

                    <Box px={1} bg={primaryLight} textAlign='center' className="heading">

                        <Heading fontWeight='semibold' py='8' size='lg' >Get your favorites for free</Heading>

                        <TabList boxShadow='sm' justifyContent={['space-evenly','space-evenly','center','center']} >
                            {starNumbers.map((startNumber) => {
                                return (
                                    <Tab 
                                    _selected={{
                                        color: 'black',
                                        borderBottom: '4px',
                                        borderBottomColor: primaryGreen
                                    }}
                                    px={['2','7','2rem']} 
                                    fontWeight='semibold' 
                                    fontSize={['1.1rem','1.2rem','1.8rem']}>{startNumber} <GrStar color={secondaryGreen} fontSize='1rem' /></Tab>
                                )
                            })}
                        </TabList>
                    </Box>

                    <Box bg={secondaryLight} className="tabs">
                        <TabPanels>
                            {coffees.map((coffee) => {
                                return (
                                    <TabPanel>
                                        <TabItem
                                            image={coffee.img}
                                            title={coffee.title}
                                            desc={coffee.desc} />
                                    </TabPanel>
                                )
                            })}
                        </TabPanels>
                    </Box>

                </Tabs>
            </Box>

        </Box>
    );
}

export default Stars;