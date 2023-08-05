import { Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import React from "react";

const PopoverHover:React.FC<{children: React.ReactNode, text: string}> = ({children, text}) => {
    return (
        <Popover placement='top' trigger="hover">
      <PopoverTrigger >
        {children}
      </PopoverTrigger>
      <PopoverContent color='black' bg='whiteAlpha.800' w='auto'>
        <PopoverArrow bg='whiteAlpha.800' />
        <PopoverBody>
          {text}
        </PopoverBody>
      </PopoverContent>
    </Popover>
    )
};

export default PopoverHover;