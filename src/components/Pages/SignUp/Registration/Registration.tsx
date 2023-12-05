import { useNavigate } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import classes from '../SignUp.module.css';
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import Footer from '../../../Layout/Footer/Footer';
import devices from './Devices.png';

const Registration = ():JSX.Element => {

    const navigate = useNavigate();

    const registrationNextHandler = () => {
        navigate("/signup/welcomeBack")
    }

    return (<main className={classes.signUpMain}>
        <Header />

        <Container maxW={'container.sm'} mt={'6rem'} position={'relative'} zIndex={2} textAlign={'center'} pt={'1rem'} p={'3rem'} fontSize={'lg'}>
            <img src={devices} alt="Devies" className={classes.mainContainerImage} />
            <Box fontSize={"0.8rem"} textAlign={'center'} height={'0.8rem'} lineHeight={'0.8rem'} mb={'0.5rem'}>
                STEP <b className={classes.bold}>1</b> OF <b className={classes.bold}>3</b>
            </Box>
            <Heading as='h2' size='xl' >Finish setting up your account!</Heading>
            <Box py={'1rem'}>Netflix is personalised for you.</Box>
            <Box py={'1rem'}>Create a password to watch on any device at any time.</Box>
            
            <Button bg={'#e50914'} w={'100%'} color={'white'} fontSize={"1.75rem"} height={"4rem"} fontWeight={"400"} _hover={{bg: '#c11119'}} onClick={registrationNextHandler}>Next</Button>
        </Container>
        <Footer />
    </main>)
}

export default Registration;