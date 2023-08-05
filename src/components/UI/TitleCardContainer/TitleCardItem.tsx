import { Box, Flex } from '@chakra-ui/react';
import classes from './TitleCardContainer.module.css';
import { PlayIcon } from '../../Util/svg-icons/svg-icons';

const TitleCardItem:React.FC<{id: number, title: string, content: string, image: string, time:number }> = (props) => {
    const { id, title, content, image, time } = props;
    let hours = 0, minutes = 0;
    if(time > 60*1000){
        minutes = Math.floor(time/(60*1000));
    }

    if(minutes > 60){
        hours = Math.floor(minutes/60);
        minutes = Math.floor(minutes % 60);
    }

    return <div className={classes.titleCardItem}>
        <Flex flexBasis={'7%'} justifyContent={'flex-end'} alignItems={'center'} fontSize={'1.5rem'}>
            {id}
        </Flex>
        <div className={classes.imgDiv}>
            <img src={image} alt={title} className={classes.img}/>
            <PlayIcon className={classes.playIcon} />
        </div>
        <Flex flexDirection={'column'} flex={1} >
            <Flex justifyContent={'space-between'} fontWeight={'700'} mb={'0.5rem'} fontSize={'1.2rem'}>
                <Box>{title}</Box>
                <Box>{hours > 0 && `${hours} h `} {minutes} m</Box>
            </Flex>
            <Box>{content}</Box>
        </Flex>
    </div>
}

export default TitleCardItem;