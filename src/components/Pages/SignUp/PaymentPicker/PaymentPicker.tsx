import { useNavigate } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import classes from '../SignUp.module.css';
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import Footer from '../../../Layout/Footer/Footer';
import Lock from './Lock.png';
import { useAppDispatch } from '../../../../store/hookTypes';
import { userRegister } from '../../../../store/user/user-slice-actions';

const PaymentPicker = ():JSX.Element => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const chooseNextHandler = () => {
        dispatch(userRegister());
        navigate("/browse");
    }

    return (<main className={classes.signUpMain}>
        <Header />

        <Container maxW={'container.sm'} mt={'6rem'} position={'relative'} zIndex={2} textAlign={'center'} pt={'1rem'} p={'3rem'} fontSize={'lg'} centerContent>
            <img src={Lock} alt="Devies" className={classes.mainContainerImage} />
            <Box fontSize={"0.8rem"} textAlign={'center'} height={'0.8rem'} lineHeight={'0.8rem'} mb={'0.5rem'}>
                STEP <b className={classes.bold}>3</b> OF <b className={classes.bold}>3</b>
            </Box>
            <Heading as='h2' size='xl' mb={'1rem'}>Choose how to pay.</Heading>

            <Box>Your payment is encrypted and you can change your payment method at anytime.</Box>
            <Box fontWeight={'501'}>Secure for peace of mind.</Box>
            <Box fontWeight={'501'} mb={'1rem'}>Cancel easily online.</Box>

            <Button bg={'#e50914'} w={'100%'} color={'white'} fontSize={"1.75rem"} height={"4rem"} fontWeight={"400"} _hover={{bg: '#c11119'}} onClick={chooseNextHandler}>Next</Button>
        </Container>
        <Footer />
    </main>)
}

export default PaymentPicker;