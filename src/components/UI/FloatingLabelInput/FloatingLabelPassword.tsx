import React, { useEffect, useState } from "react"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Flex,
  } from "@chakra-ui/react";
import classes from './FloatingLabelInput.module.css';

const FloatingLabelPassword:React.FC<any> = (props) => {
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ inputValueValid, setInputValueValid ] = useState<boolean>(false);
    const [ inputTouched, setInputTouched ] = useState<boolean>(false);
    const inputIsValid = !inputValueValid && inputTouched ;

    const toggleShowPasswordHandler = () => {
        setShowPassword((prevState) => !prevState);
    }

    useEffect(()=>{
        if(props?.value.length > 0){
          setInputTouched(true);
        }
        
        if(props?.value.length >= 6){
            setInputValueValid(true);
        }else{
            setInputValueValid(false);
        }
      }, [props?.value])

    return ( <Flex flex={1} h={'5rem'}>
        <FormControl variant="floating" id={props.id} isRequired={props.required} isInvalid={inputIsValid}  >
            <Input placeholder=" " type={showPassword ? 'text' : 'password'} pl={4} minH={'3rem'} className={`${classes['floatingLabelInput-input']} ${props.inputClass}`} minLength={4} maxLength={60} onChange={props.onChange} value={props.value}/>
            
            <button type="button" className={`${props.passwordShowClass} ${classes.showPassword}`} onClick={toggleShowPasswordHandler}>
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
            {inputIsValid && <FormErrorMessage color={'red'}>{props.errorMsg}</FormErrorMessage>}
        </FormControl>
      </Flex>)
};

export default FloatingLabelPassword;