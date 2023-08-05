import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"
import classes from './ExploreRelatedTo.module.css';
import { Link } from "react-router-dom";

const ExploreRelatedTo = () => {
    return <Box>
        <Box className={classes.spacer}></Box>
        <Flex fontSize={'1.2rem'} p={'0 4rem'}>
            <Box color={'gray'} width={'20rem'}>Explore titles related to:</Box>
            <UnorderedList color={'white'} listStyleType={'none'} display={'flex'} flexWrap={'wrap'} className={classes.searchList}>
                <ListItem className={classes.searchLink}>
                    <Link to="#">Office</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">The Office (U.K.)</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">Office Space</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">An Officer and a Gentleman</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">The Office: Series 1: Bonus Material</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">Office Christmas Party</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">Office Uprising</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">The Office Special</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">An Officer and a Murderer</Link>
                </ListItem>
                <ListItem className={classes.searchLink}>
                    <Link to="#">Officer</Link>
                </ListItem>
            
            </UnorderedList>
        </Flex>
    </Box>
}

export default ExploreRelatedTo;