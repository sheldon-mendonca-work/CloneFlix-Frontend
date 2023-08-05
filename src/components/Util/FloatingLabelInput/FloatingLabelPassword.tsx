import React, { useState } from "react"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Center,
    Button,
  } from "@chakra-ui/react";
import classes from './FloatingLabelInput.module.css';

const FloatingLabelPassword:React.FC<any> = (props) => {
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const isError = props.isError;

    const toggleShowPasswordHandler = () => {
        setShowPassword((prevState) => !prevState);
    }

    return ( <Center flex={1}>
        <FormControl variant="floating" id={props.id} isRequired={props.required} isInvalid={isError} mb={'1rem'} >
            <Input placeholder=" " type={showPassword ? 'text' : 'password'} pl={4} minH={'3rem'} className={`${classes['floatingLabelInput-input']} ${props.inputClass}`}/>
            
            <button  className={`${props.passwordShowClass} ${classes.showPassword}`} onClick={toggleShowPasswordHandler}>
                {showPassword ? 'HIDE' : 'SHOW'}
            </button>
          <FormLabel top = {0}
                    pt={3}
                    left = {0}
                    zIndex = {2}
                    mx={4}
                    position = {"absolute"}
                    pointerEvents = {"none"}
                    transformOrigin = {"left top"}
                    className={`${classes['floatingLabelInput-label']} ${props.labelClass}`}>{props.placeholder}</FormLabel>
            {isError && <FormErrorMessage color={'red'}>{props.errorMsg}</FormErrorMessage>}
        </FormControl>
      </Center>)
};

export default FloatingLabelPassword;