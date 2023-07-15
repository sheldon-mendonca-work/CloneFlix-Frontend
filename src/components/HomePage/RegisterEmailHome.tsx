import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import classes from './HomePage.module.css';
import FloatingLabelInput from '../Util/FloatingLabelInput/FloatingLabelInput';

const RegisterEmailHome = () => {
    return <div className={classes.registerEmailHome}>
        <div>Ready to watch? Enter your email to create or restart your membership.</div>
        <form className={classes.registerEmailForm}>
            <FloatingLabelInput type='email' id='enter-email' placeholder="Email Address" className={classes.lightSignup}/>
            <button className={classes.signUpButton}>Get Started<ChevronRightIcon /></button>
        </form>
    </div>
}

export default RegisterEmailHome;