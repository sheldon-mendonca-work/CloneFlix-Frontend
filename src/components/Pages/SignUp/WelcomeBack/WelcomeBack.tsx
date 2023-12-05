import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../Layout/Header/Header';
import FloatingLabelPassword from '../../../UI/FloatingLabelInput/FloatingLabelPassword';
import classes from '../SignUp.module.css';
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Footer from '../../../Layout/Footer/Footer';
import { useAppDispatch, useAppSelector } from '../../../../store/hookTypes';
import { userActions } from '../../../../store/user/user-slice';
import { useEffect } from 'react';

const WelcomeBack = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const emailAddress = useAppSelector((state) => state.user.emailAddress);
    const password = useAppSelector((state) => state.user.password);
    
    useEffect(()=>{
        if(!emailAddress.trim().length){
            // navigate("/login");
        }
    },[emailAddress])

    const passwordInputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        dispatch(userActions.updatePassword({userPassword: event.target.value}));
    }

    const formSubmitHandler = (event:React.ChangeEvent<HTMLFormElement>):void => {
        navigate("/signup/choosePlan");
    }

    return (<main className={classes.signUpMain}>
        <Header />

        <Container maxW={'container.sm'} mt={'6rem'} position={'relative'} zIndex={2} pt={'1rem'} p={'3rem'} fontSize={'lg'} centerContent>
            <Box fontSize={"0.8rem"} textAlign={'center'} height={'0.8rem'} lineHeight={'0.8rem'} mb={'0.5rem'}>
                STEP <b className={classes.bold}>1</b> OF <b className={classes.bold}>3</b>
            </Box>
            <Heading as='h2' size='xl' >Welcome back!</Heading>
            <Heading as='h2' size='xl' mb={'1.5rem'}>Rejoining Netflix is easy.</Heading>
            <Box >Enter your password and you'll be watching in no time.</Box>
            <Box minW={'80%'}>
                <Box py={'1rem'}>
                    <Box>Email</Box>
                    <Box><b className={classes.bold}>{emailAddress}</b></Box>
                </Box>
                <Flex flexDirection={'column'} gap={'1rem'} >
                    <form onSubmit={formSubmitHandler}>
                        <FloatingLabelPassword type='password' id='enter-password' placeholder="Enter your password" value={password} onChange={passwordInputChangeHandler} inputClass={classes.signupPasswordInput} labelClass={classes.signupInputLabel} errorMsg="Your password must be between 4 and 60 characters" required={true} isError={true} passwordShowClass={classes.passwordShowClass}/>
                        
                        <Box py={'1rem'}><Link to="#" className={classes.forgotPassword}>Forgot your password?</Link></Box>

                        <Button type={'submit'} bg={'#e50914'} color={'white'} w={'100%'} fontSize={"1.5rem"} height={"3rem"} fontWeight={"400"} _hover={{bg: '#c11119'}}>Next</Button>
                        
                    </form>
                </Flex>
            </Box>
        </Container>
        <Footer />
    </main>)
}

export default WelcomeBack;