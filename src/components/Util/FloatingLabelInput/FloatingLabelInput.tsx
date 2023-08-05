import React from "react"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Center,
  } from "@chakra-ui/react";
import classes from './FloatingLabelInput.module.css';

const FloatingLabelInput:React.FC<any> = (props) => {
    const isError = props.isError;

    return <Center flex={1}>
    <FormControl variant="floating" id={props.id} isRequired={props.required} isInvalid={isError} mb={'1rem'} >
      <Input placeholder=" " type={props.type} pl={4} minH={'3rem'} className={`${classes['floatingLabelInput-input']} ${props.inputClass}`}/>
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
  </Center>
};

export default FloatingLabelInput;