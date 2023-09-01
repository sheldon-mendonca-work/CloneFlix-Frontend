import React, { useEffect, useState } from "react"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Flex,
  } from "@chakra-ui/react";
import classes from './FloatingLabelInput.module.css';

const FloatingLabelInput:React.FC<any> = (props) => {
    const [ inputValueValid, setInputValueValid ] = useState<boolean>(false);
    const [ inputTouched, setInputTouched ] = useState<boolean>(false);
    const inputIsValid = !inputValueValid && inputTouched ;
    
    useEffect(()=>{
      
      if(props?.value.length > 0){
        setInputTouched(true);
      }

      if(props?.type === 'email'){
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(props?.value) ) {
            setInputValueValid(true)
        }
        else {
          setInputValueValid(false)
        }
      }
    }, [props?.value, props?.type])
    
    
    return <Flex flex={1} h={'5rem'}>
    <FormControl variant="floating" id={props.id} isRequired={props.required} isInvalid={inputIsValid} >
      <Input placeholder=" " type={props.type} pl={4} minH={'3rem'} className={`${classes['floatingLabelInput-input']} ${props.inputClass}`} onChange={props.onChange} value={props.value}/>
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
  </Flex>
};

export default FloatingLabelInput;