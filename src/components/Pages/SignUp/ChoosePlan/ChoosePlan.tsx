import { useNavigate } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import classes from '../SignUp.module.css';
import { Box, Button, Container, Heading, ListIcon, ListItem, List } from "@chakra-ui/react";
import Footer from '../../../Layout/Footer/Footer';
import Checkmark from './Checkmark.png';
import { CheckIcon } from '@chakra-ui/icons';

const ChoosePlan = ():JSX.Element => {

    const navigate = useNavigate();

    const chooseNextHandler = () => {
        navigate("/signup/selectPlan")
    }

    return (<main className={classes.signUpMain}>
        <Header />

        <Container maxW={'container.sm'} mt={'6rem'} position={'relative'} zIndex={2} textAlign={'center'} pt={'1rem'} p={'3rem'} fontSize={'lg'} centerContent>
            <img src={Checkmark} alt="Devies" className={classes.mainContainerImage} />
            <Box fontSize={"0.8rem"} textAlign={'center'} height={'0.8rem'} lineHeight={'0.8rem'} mb={'0.5rem'}>
                STEP <b className={classes.bold}>2</b> OF <b className={classes.bold}>3</b>
            </Box>
            <Heading as='h2' size='xl' >Choose your plan.</Heading>
            
            <List spacing={'3'} my={'2rem'}>
                <ListItem>
                    <ListIcon as={CheckIcon} color={'red'} />
                    No commitments, cancel anytime.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color={'red'} />
                    Everything on Netflix for one low price.
                </ListItem>
                <ListItem>
                    <ListIcon as={CheckIcon} color={'red'} />
                    No ads and no extra fees. Ever.
                </ListItem>
            </List>

            <Button bg={'#e50914'} w={'100%'} color={'white'} fontSize={"1.75rem"} height={"4rem"} fontWeight={"400"} _hover={{bg: '#c11119'}} onClick={chooseNextHandler}>Next</Button>
        </Container>
        <Footer />
    </main>)
}

export default ChoosePlan;