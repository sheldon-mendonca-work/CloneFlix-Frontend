import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import classes from './Header.module.css';
import { NetflixIcon } from "../../Util/svg-icons/svg-icons";
import SelectLanguage from "../../UI/SelectLanguage/SelectLanguage";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return <Flex className={classes.headingHeader}>
    <Box onClick={()=>navigate('/')}><NetflixIcon className={classes.netflixIcon}/></Box>
    <Spacer />
    <Flex gap={'0.5rem'} className={classes.headingActions}>
        <SelectLanguage className='heading'/>
        <Button bg={'#e50914'} color={'white'} _hover={{bg: '#c11119'}} onClick={()=>navigate('/login')}>Sign In</Button>
    </Flex>
</Flex>
};

export default Header;