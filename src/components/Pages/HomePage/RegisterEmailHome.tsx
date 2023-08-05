import { ChevronRightIcon } from '@chakra-ui/icons';
import React from 'react';
import classes from './HomePage.module.css';
import FloatingLabelInput from '../..//Util/FloatingLabelInput/FloatingLabelInput';
import { Button } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

const RegisterEmailHome = () => {
    return <div className={classes.registerEmailHome}>
        <div>Ready to watch? Enter your email to create or restart your membership.</div>
        <form className={classes.registerEmailForm}>

            <FloatingLabelInput type='email' id='enter-email' placeholder="Email Address" inputClass={classes.regEmailInput} labelClass={classes.regEmailLabel} errorMsg="Email Address is invalid" required={true} isError={false}/>

            <Button size='lg' bg={'#e50914'} color={'white'} _hover={{bg: '#c11119'}}>Get Started<ChevronRightIcon /></Button>
        </form>
    </div>
}

export default RegisterEmailHome;