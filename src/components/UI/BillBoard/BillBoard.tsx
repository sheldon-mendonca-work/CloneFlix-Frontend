import { Box, Button } from '@chakra-ui/react';
import classes from './BillBoard.module.css';
import { InfoIcon, PlayIcon } from '../../Util/svg-icons/svg-icons';
import MovieListSlider from '../MovieListSlider/MovieListSlider';

const BillBoard = () => {
    return <Box position={'relative'}  w='100%' h='100%' fontSize={'1rem'}>
        <Box className={classes.billImgDiv}>
            <img src='NetflixImages/AAAABcuR9HoQuPWPhkVg7rDEq51HeFbblzubYC1gNdohv4Rh7DyXQQE6_UuA.jpg' alt='Black Mirror' className={classes.billImg}/>
        </Box>

        <Box position={'absolute'} bottom={'30%'} left='4rem' mb="2rem" className='left' width={'35%'}>
            <Box className='logo'>
            
            <img src='NetflixImages/AAAABTF-xURXXVFrokSvDrZyqMEsYRUGj1UxDoFZb9uzhhpzl3VT5-sXz1L_.png' alt='Black Mirror' className={classes.billImg} width={'100%'}/>
            </Box>
            <Box className='info-actions' fontSize={'xl'}>
                <Box className='info' color={'white'} mb={'1rem'}>
                    Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.
                </Box>
                <Box className='actions'>
                    <Button mr={'5px'} size={'lg'} _hover={{bg: 'whiteAlpha.700'}}>
                        <PlayIcon className={classes.playIcon}/>
                        <span>Play</span>
                    </Button>
                    <Button size={'lg'} color={'white'} bg={'gray'} _hover={{bg: 'blackAlpha.500'}}>
                        <InfoIcon className={classes.infoIcon}/>
                        <span>More Info</span>
                    </Button>
                </Box>
            </Box>
        </Box>
        <Box position={'absolute'} top='50%' right='0' w={'10rem'} color={'white'} bg={'blackAlpha.500'} p={'1rem'} fontSize={'xl'} borderLeft={'4px solid white'}>
            A
        </Box>
        <Box pos={'absolute'} bottom={'0'} w={'100%'} className={classes.billboardSlider}><MovieListSlider /></Box>
    </Box>
};

export default BillBoard;