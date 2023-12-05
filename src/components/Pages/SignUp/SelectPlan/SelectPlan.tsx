import { useNavigate } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import classes from '../SignUp.module.css';
import { Box, Button, Container, Heading, ListIcon, ListItem, List } from "@chakra-ui/react";
import Footer from '../../../Layout/Footer/Footer';
import { CheckIcon } from '@chakra-ui/icons';
import SelectPlanTable from './SelectPlanTable';

const SelectPlan = ():JSX.Element => {

    const navigate = useNavigate();

    const registrationNextHandler = () => {
        navigate("/signup/paymentPicker")
    }

    return (<main className={classes.signUpMain}>
        <Header />

        <Container maxW={'container.sm'} my={'6rem'} position={'relative'} zIndex={2} textAlign={'center'} p={'1rem'} fontSize={'lg'} minW={'80%'}>
            <Box textAlign={'left'}>
                <Box fontSize={"0.8rem"} textAlign={'center'} height={'0.8rem'} lineHeight={'0.8rem'} mb={'0.5rem'}>
                    STEP <b className={classes.bold}>2</b> OF <b className={classes.bold}>3</b>
                </Box>
                <Heading as='h2' size='xl' >Choose the plan that's right for you.</Heading>
                
                <List spacing={'3'}>
                    <ListItem>
                        <ListIcon as={CheckIcon} color={'red'} />
                        Watch all you want. Ad-free.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color={'red'} />
                        Recommendations just for you.
                    </ListItem>
                    <ListItem>
                        <ListIcon as={CheckIcon} color={'red'} />
                        Change or cancel your plan anytime.
                    </ListItem>
                </List>
            </Box>
            <Box>
                <SelectPlanTable />
            </Box>

            <Box textAlign={'left'} fontSize={'0.8rem'} opacity={'0.6'}>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</Box>
            <Box textAlign={'left'} fontSize={'0.8rem'} opacity={'0.6'} mb={'1rem'}>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</Box>

            <Button bg={'#e50914'} w={'70%'} color={'white'} fontSize={"1.75rem"} height={"4rem"} fontWeight={"400"} _hover={{bg: '#c11119'}} onClick={registrationNextHandler}>Next</Button>
        </Container>
        <Footer />
    </main>)
}

export default SelectPlan;