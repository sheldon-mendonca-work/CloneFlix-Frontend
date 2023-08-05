import { Link } from 'react-router-dom';
import Header from '../../Layout/Header/Header';
import FloatingLabelPassword from '../../Util/FloatingLabelInput/FloatingLabelPassword';
import classes from './SignUp.module.css';
import { Box, Button, Checkbox, Container, Flex, FormControl, Heading, Spacer } from "@chakra-ui/react";
import Footer from '../../Layout/Footer/Footer';

const SignUp = () => {
    return (<main className={classes.signUpMain}>
        <Header />

        <Container maxW={'container.sm'} mt={'6rem'} position={'relative'} zIndex={2} pt={'1rem'} p={'3rem'} fontSize={'lg'}>
            <Box>
                STEP <b className={classes.bold}>1</b> OF <b className={classes.bold}>3</b>
            </Box>
            <Heading as='h2' size='xl' >Welcome back!</Heading>
            <Heading as='h2' size='xl' mb={'1.5rem'}>Rejoining Netflix is easy.</Heading>
            <Box >Enter your password and you'll be watching in no time.</Box>
            <Box py={'1rem'}>
                <Box>Email</Box>
                <Box><b className={classes.bold}>sheldonmendonca1012@gmail.com</b></Box>
            </Box>
            <Flex flexDirection={'column'} gap={'1rem'}>
                <FormControl>
                    <FloatingLabelPassword type='password' id='enter-password' placeholder="Enter your password" inputClass={classes.signupPasswordInput} labelClass={classes.signupInputLabel} errorMsg="Your password must be between 4 and 60 characters" required={true} isError={true} passwordShowClass={classes.passwordShowClass}/>
                    
                    <Box py={'1rem'}><Link to="#" className={classes.forgotPassword}>Forgot your password?</Link></Box>

                    <Button bg={'#e50914'} w={'100%'} color={'white'} _hover={{bg: '#c11119'}}>Next</Button>
                    
                </FormControl>
            </Flex>
        </Container>
        <Footer />
    </main>)
}

export default SignUp;