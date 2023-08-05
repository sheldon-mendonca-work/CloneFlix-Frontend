import Footer from "../../Layout/Footer/Footer";
import classes from './Login.module.css'
import Header from "../../Layout/Header/Header";
import { Box, Button, Checkbox, Container, Flex, FormControl, Heading, Spacer } from "@chakra-ui/react";
import FloatingLabelInput from "../../Util/FloatingLabelInput/FloatingLabelInput";
import FloatingLabelPassword from "../../Util/FloatingLabelInput/FloatingLabelPassword";
import { Link } from "react-router-dom";

const Login = () => {
    return (<main className={classes.loginMain}>
        <Header />
        <div className={classes.headingBanner}>
            <img src='SiteImages/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Heading-background' className={classes.headingBannerImg}/>
        </div>
        <Container maxW={'container.sm'} bg={'blackAlpha.800'} mt={'6rem'} mb={'6rem'} position={'relative'} zIndex={2} p={'3rem'}>
            <Heading as='h2' size='2xl' mb={'1.5rem'} color={'white'}>
                Sign In
            </Heading>
            <Flex flexDirection={'column'} gap={'1rem'}>
                <FormControl>
                
                    <FloatingLabelInput type='email' id='enter-email' placeholder="Email Address" inputClass={classes.loginEmailInput} labelClass={classes.loginInputLabel} errorMsg="Email Address is invalid" required={true} isError={true}/>

                    <FloatingLabelPassword type='password' id='enter-password' placeholder="Enter Password" inputClass={classes.loginPasswordInput} labelClass={classes.loginInputLabel} errorMsg="Your password must be between 4 and 60 characters" required={true} isError={true} passwordShowClass={classes.passwordShowClass}/>

                    <Button bg={'#e50914'} color={'white'} _hover={{bg: '#c11119'}}>Sign In</Button>
                    
                </FormControl>
                <Flex>
                    <Box>
                        <Checkbox colorScheme="gray">
                            <Box color={'#8c8c8c'} fontSize={'sm'}>Remember Me</Box>
                        </Checkbox>
                    </Box>
                    <Spacer />
                    <Box color={'#8c8c8c'} fontSize={'sm'}>
                        <Link to="#">Need Help?</Link>
                    </Box>
                </Flex>
                <Box color={'#8c8c8c'}>
                    New to Netflix? <Link to="/" className={classes.loginSignUp}>Sign up now.</Link>
                </Box>
                <Box color={'#8c8c8c'}>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#" className={classes.loginCaptchaLink}>Learn More.</Link>
                </Box>
            </Flex>
        </Container>
        <Footer />
    </main>)
};

export default Login;