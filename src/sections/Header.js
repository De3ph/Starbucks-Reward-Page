import {
    Avatar,
    Box,
    Button, ButtonGroup,
    Flex,
    Link,
    Spacer,
    Tab, Tabs, TabList,
    Text,
    Drawer, DrawerOverlay, DrawerContent, DrawerBody, useDisclosure, DrawerCloseButton, IconButton, Divider} from '@chakra-ui/react'
import logo from '../assets/svg/starbucks.svg'
import { IoLocationSharp } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import {primaryGreen , primaryDark ,secondaryDark} from '../variables/Colors'

function Header() {


    const { isOpen, onOpen, onClose } = useDisclosure();

    const starbucksReward = (
        <Flex w={'100vw'} p={2} bg={secondaryDark}
        minHeight='3rem'
        maxHeight={'max-content'}
        >
            <Text fontWeight='extrabold' alignSelf='center' fontSize='0.7rem' color={'white'} ml={['2', '2','6rem','6rem']} >STARBUCKS® REWARDS</Text>
            <Spacer />
            <Button display={['block','block','none','none']} color={'white'} variant={'outline'} size={'sm'} borderRadius={'full'} _hover={{
                backgroundColor: 'white',
                color: primaryDark,
                borderColor: primaryDark
            }}><Text>Join in the App</Text></Button>
        </Flex>)
    
    return (
        <Box
        >
            <Box
                display={['none', 'none', 'none', 'block']}
            >
                <Flex p={{
                    base: '5',
                }}
                    px={{
                        base: '8',
                        xl: '20'
                    }}
                >
                    <Avatar _hover={{
                        cursor: "grab"
                    }} name='starbucks' src={logo} me={{
                        xl: '3rem',
                        md: '2rem'
                    }} />

                    <Flex gap={3} alignItems={'center'} >
                        <Tabs variant='' colorScheme={'green'} >
                            <TabList>
                                <Tab _selected={{
                                    borderBottom:'4px',
                                    borderColor:primaryGreen
                                }}>
                                    <Link h={'100%'} fontWeight={'semibold'} fontSize={'larger'} _hover={{
                                        color: {primaryGreen}
                                    }}>MENU</Link>
                                </Tab>
                                <Tab _selected={{
                                    borderBottom:'4px',
                                    borderColor:primaryGreen
                                }}>
                                    <Link h={'100%'} fontWeight={'semibold'} fontSize={'larger'} _hover={{
                                        color: {primaryGreen}
                                    }}>REWARDS</Link>
                                </Tab>
                                <Tab _selected={{
                                    borderBottom:'4px',
                                    borderColor:primaryGreen
                                }}>
                                    <Link h={'100%'} fontWeight={'semibold'} fontSize={'larger'} _hover={{
                                        color: {primaryGreen}
                                    }}>GIFT CARDS</Link>
                                </Tab>
                            </TabList>
                        </Tabs>

                    </Flex>

                    <Spacer />

                    <Flex>
                        <ButtonGroup alignItems={'center'} pe={3}>
                            <Button me={8} bg='transparent' leftIcon={<IoLocationSharp fontSize={'1.5rem'} />} borderRadius={20}>Find a store</Button>
                            <Button size={'sm'} borderColor={primaryDark} borderWidth={1} p='4' fontSize='md' bg='white' color={primaryDark} borderRadius={20}>Sign in</Button>
                            <Button _hover={{
                                backgroundColor: '#2D3748'
                            }} size={'sm'} p='4' fontSize='md' bg={primaryDark} color='white' borderRadius={20}>Join Now</Button>
                        </ButtonGroup>
                    </Flex>
                </Flex>
                {starbucksReward}
            </Box>

            <Box
                display={['flex', 'flex', 'flex', 'none']}
                flexDirection='column'
            >

                <Box
                    display={['flex', 'flex', 'flex', 'none']}
                    p={3}
                >
                    <Avatar _hover={{ cursor: "grab" }} name='starbucks' src={logo}/>

                    <Spacer />

                    <IconButton borderRadius={'full'} bg={'transparent'} size={'lg'} icon={<GiHamburgerMenu />} onClick={onOpen} />

                    <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton size={'lg'} mt={2} />
                            <DrawerBody>
                                <Flex py={7} direction={'column'} gap='4'>
                                    <Link h={'100%'} fontSize={'3xl'} _hover={{
                                        color: {primaryGreen}
                                    }}>Menu</Link>
                                    <Link h={'100%'} fontSize={'3xl'} _hover={{
                                        color: {primaryGreen}
                                    }}>Rewards</Link>
                                    <Link h={'100%'} fontSize={'3xl'} _hover={{
                                        color: {primaryGreen}
                                    }}>Gift Cards</Link>
                                </Flex>

                                <Divider />

                                <Box>
                                    <Flex mt={4} flexDir={'column'} gap='5' alignItems={'center'} pe={3}>
                                        <Flex mt={4} w={'100%'} justifyContent={'space-evenly'} >
                                            <Button size={'sm'} borderColor={primaryDark} borderWidth={1} p='4' fontSize='md' bg='white' color={primaryDark} borderRadius={20}>Sign in</Button>
                                            <Button _hover={{
                                                backgroundColor: '#2D3748'
                                            }} size={'sm'} p='4' fontSize='md' bg={primaryDark} color='white' borderRadius={20}>Join Now</Button>
                                        </Flex>

                                        <Button size={'lg'} bg='transparent' leftIcon={<IoLocationSharp fontSize={'1.5rem'} />} borderRadius={20}>Find a store</Button>
                                    </Flex>
                                </Box>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>

                <Box>
                    {starbucksReward}
                </Box>

            </Box>

        </Box>
    );
}

export default Header;