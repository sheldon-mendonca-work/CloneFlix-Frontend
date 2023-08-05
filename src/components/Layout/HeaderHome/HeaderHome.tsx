import { Box, Flex, Input, ListItem, Spacer, UnorderedList } from "@chakra-ui/react";
import classes from './HeaderHome.module.css';
import { CircleQuestionMarkIcon, NetflixIcon, NotificationIcon, PencilIcon, ProfileTransferIcon, UserAccountIcon } from "../../Util/svg-icons/svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {  ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";

const HeaderHome = () => {
    const navigate = useNavigate();
    const [ showAccountMenu, setShowAccountMenu ] = useState(false);
    const [ searchInputActive, setSearchInputActive ] = useState(false);

    return <Flex className={`${classes.headingHeader}`}>
    <Box onClick={()=>navigate('/')}><NetflixIcon className={classes.netflixIcon}/></Box>
    <UnorderedList className={classes.navList} listStyleType={'none'} color={'white'}>
        <ListItem><Link to="/browse">Home</Link></ListItem>
        <ListItem><Link to="#">TV Shows</Link></ListItem>
        <ListItem><Link to="#">Movies</Link></ListItem>
        <ListItem><Link to="#">New & Popular</Link></ListItem>
        <ListItem><Link to="#">My List</Link></ListItem>
        <ListItem><Link to="#">Browse by Languages</Link></ListItem>
    </UnorderedList>
    <Spacer />
    <Flex className={classes.headingActions} gap={'1rem'} alignItems={'center'}
    color={'white'}>
        <Flex cursor={'pointer'} position={'relative'} alignItems={'center'} minW={'2rem'} minH={'2rem'}>
            
            {searchInputActive && <Input placeholder="Titles, people, genres" className={classes.searchInput} bg={'blackAlpha.700'} color={'white'} pl={'2rem'}  autoFocus={true} onBlur={()=>setSearchInputActive(false)}/>}
            
            <Search2Icon position={'absolute'} onClick={()=>setSearchInputActive(true)} width={'2rem'} left={'0'} zIndex={'2'}/>
        </Flex>
        <Box>Children</Box>
        <NotificationIcon className={classes.notification} />
        <Flex onPointerEnter={()=>setShowAccountMenu(true)} onPointerLeave={()=>setShowAccountMenu(false)} position={'relative'} alignItems={'center'}>
            <div><img src='NetflixImages/AAAABY20DrC911ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5Nryz.png' alt="User Profile"/></div>
            <ChevronDownIcon transform={showAccountMenu ? 'rotate(-180deg)': 'rotate(0)'} transition={'all 0.2s'}/>
            { showAccountMenu && <Box position={'absolute'} top='100%' right={'0'} w={'15rem'} border={'1px solid black'}>
                <UnorderedList bg={'blackAlpha.800'} color={'white'} listStyleType={'none'} fontSize={'sm'} m={'0'} className={classes.accountList}>
                    <ListItem><Link to="#" className={`${classes.accountLink} ${classes.accountChildrenMode}`}>
                        <span><img src='NetflixImages/AAAABY20DrC911ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5Nryz.png' alt="User Profile"/></span>
                        <span>Children</span>
                    </Link></ListItem>
                    <hr></hr>
                    <ListItem><Link to="#" className={classes.accountLink}>
                        <span><PencilIcon className={classes.pencilIcon} /></span>
                        <span>Manage Profiles</span>
                    </Link></ListItem>
                    <ListItem><Link to="#" className={classes.accountLink}>
                        <span><ProfileTransferIcon className={classes.profileTransferIcon} /></span>
                        <span>Transfer Profiles</span>
                    </Link></ListItem>
                    <ListItem><Link to="#" className={classes.accountLink}>
                        <span><UserAccountIcon className={classes.userAccountIcon} /></span>
                        <span>Account</span>
                    </Link></ListItem>
                    <ListItem><Link to="#" className={classes.accountLink}>
                        <span><CircleQuestionMarkIcon className={classes.circleQuestionMarkIcon} /></span>
                        <span>Help Center</span>
                    </Link></ListItem>
                    <hr></hr>
                    <ListItem><Link to="#" className={classes.accountSignOut}>Sign out of Netflix</Link></ListItem>
                </UnorderedList>
            </Box>}
        </Flex>
    </Flex>
</Flex>
};

export default HeaderHome;