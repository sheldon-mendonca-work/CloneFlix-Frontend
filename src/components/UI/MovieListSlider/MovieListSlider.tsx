import { Box, Center } from '@chakra-ui/react';
import classes from './MovieListSlider.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import MovieItem from '../MovieItem/MovieItem';
import { useState } from 'react';


const MovieListSlider = () => {
    const [ showExploreAll, setShowExploreAll ] = useState(false);
    const [ showExploreIcon, setShowExploreIcon ] = useState(false);
    const [ sliderIndex, setSliderIndex ] = useState(0);

    const sliderClickHandler = ( type:boolean ) => {
        let maxSliderIndex = 3;
        if(type){
            setSliderIndex(prevSlider => prevSlider-1 <= -maxSliderIndex ? -maxSliderIndex+1 : prevSlider - 1);
        }else{
            setSliderIndex(prevSlider => prevSlider+1 > 0 ? 0 : prevSlider + 1);
        }
    }
    
    return (
    <Box 
        onPointerEnter={()=>setShowExploreIcon(true)} 
        onPointerLeave={()=>setShowExploreIcon(false)} 
        zIndex={'1'}
        color={'white'}
        m={'1rem 0'}>
        <Box p={'1rem 4rem'} display={'flex'} alignItems={'center'} zIndex={'1'} pos={'relative'}>
            <span className={classes.sliderTitle}>Popular on Netflix</span>
            { showExploreIcon && 
                <span className={classes.explore} onPointerEnter={()=>setShowExploreAll(true)} 
                onPointerLeave={()=>setShowExploreAll(false)}>
                    { showExploreAll && <span className={classes.exploreAll}>
                        Explore All
                    </span>}
                    <ChevronRightIcon boxSize={'1.5rem'}/>
                </span>}
        </Box>
        <div className={classes.scroll}>
            <Center w={'4rem'} bg={'blackAlpha.700'} zIndex={'2'} color={'white'} onClick={()=>sliderClickHandler(false)} visibility={`${showExploreIcon ? 'visible': 'hidden'}`}><ChevronLeftIcon boxSize={'2.5rem'} zIndex={'2'}/></Center>
            <div className={classes.slider} style={{transform: `translateX(${sliderIndex*100}%)`}}>
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
            <Center w={'4rem'} bg={'blackAlpha.700'} zIndex={'2'} color={'white'} onClick={()=>sliderClickHandler(true)} visibility={`${showExploreIcon ? 'visible': 'hidden'}`}><ChevronRightIcon boxSize={'2.5rem'}/></Center>
        </div>
    </Box>
    )
};

export default MovieListSlider;