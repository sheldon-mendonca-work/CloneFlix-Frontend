import { ChevronRightIcon } from '@chakra-ui/icons';
import classes from './HomePage.module.css';
import { Button } from '@chakra-ui/react';
import FloatingLabelInput from '../../UI/FloatingLabelInput/FloatingLabelInput';
import { userSignUpActions } from '../../../store/userSignUp/userSignUp-slice';
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hookTypes';
import { useNavigate } from 'react-router-dom';


const RegisterEmailHome = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const emailAddress = useAppSelector((state) => state.userSignUp.emailAddress);
    
    const emailInputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        dispatch(userSignUpActions.updateEmail({userEmail: event.target.value}));
    }
    
    const registerEmailSubmitHandler = (event:FormEvent) => {
        event.preventDefault();
    
        if(emailAddress.trim().length === 0) return;
        
        navigate('/login');
    }

    return <div className={classes.registerEmailHome}>
        <div>Ready to watch? Enter your email to create or restart your membership.</div>
        <form className={classes.registerEmailForm} onSubmit={registerEmailSubmitHandler}>

            <FloatingLabelInput type='email' id='enter-email' placeholder="Email Address" inputClass={classes.regEmailInput} labelClass={classes.regEmailLabel} errorMsg="Email Address is invalid" required={true} value={emailAddress} onChange={emailInputChangeHandler} />

            <Button size='lg' bg={'#e50914'} color={'white'} _hover={{bg: '#c11119'}} type='submit'>Get Started<ChevronRightIcon /></Button>
        </form>
    </div>
}

export default RegisterEmailHome;