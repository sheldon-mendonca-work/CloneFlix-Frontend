import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import classes from './SingleVideo.module.css';
import PopoverHover from "../../UI/PopoverHover/PopoverHover";
import { LikeIcon, PlayIcon, PlusIcon } from "../../Util/svg-icons/svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TitleCardContainer from "../../UI/TitleCardContainer/TitleCardContainer";

const SingleVideo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const prevLocation = location?.pathname.split('?')[0];

    const isOpen = true;
    const onClose = ()=>{
        navigate(prevLocation);
    };

    const seasonItems = [
        {id: 1, season: 1, episodes: 12},
        {id: 2, season: 1, episodes: 13},
        {id: 3, season: 1, episodes: 14},
    ]

    return <>
        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInRight' size={'5xl'}>
        <ModalOverlay />
        <ModalContent overflow={'hidden'}  color={'white'}>
            <Box p={0} pos={'relative'}>
                <div className={classes.billboardImgDiv}>
                    <img src="NetflixImages/AAAABcuR9HoQuPWPhkVg7rDEq51HeFbblzubYC1gNdohv4Rh7DyXQQE6_UuA.jpg" alt="Black Mirror" className={classes.billboardImg} />
                </div>
                <div className={classes.bannerDiv}>
                    <div>
                        <img src="NetflixImages/AAAABTF-xURXXVFrokSvDrZyqMEsYRUGj1UxDoFZb9uzhhpzl3VT5-sXz1L_.png" alt="Black Mirror" className="BillBoard_billImg__ZcLwU" width="100%" />
                    </div>
                    <Flex>
                        <div className={classes.leftButtonControl}>
                            <PopoverHover text="Expand More">
                            <Button mr={'5px'} size={'lg'} _hover={{bg: 'whiteAlpha.700'}}>
                                <PlayIcon className={classes.playIcon}/>
                                <span>Play</span>
                            </Button>
                            </PopoverHover>
                            <PopoverHover text="Add to 'My List'"><button><PlusIcon className={classes.plusIcon} /></button></PopoverHover>
                            <PopoverHover text="I like this"><button><LikeIcon className={classes.likeIcon} /></button>
                            </PopoverHover>
                        </div>
                    </Flex>
                </div>
            
            </Box>
            <ModalCloseButton p={'0.5rem'} borderRadius={'50%'} backgroundColor={'blackAlpha.700'} color={'white'}/>
            <ModalBody backgroundColor={'rgb(20, 20, 20)'} p={'0 3rem'}>
                <Flex gap={'2rem'} mb={'1rem'}>
                    <Box flex={2}>
                        <Box mb={'0.5rem'}>
                            <span className={classes.grayColor}>98% Match</span>
                            <span className={classes.grayColor}>2023</span>
                            <span className={classes.grayColor}>2 Seasons</span>
                            <span className={classes.genreBadge}>HD</span>
                        </Box>
                        <Box mb={'0.5rem'}>
                            <span className={classes.genreBadge}>A</span>
                            Agore, nudity, sexual violence, violence
                        </Box>
                        <Box mb={'0.5rem'} fontSize={'2xl'} fontWeight={'700'}>
                            #8 in TV Shows Today
                        </Box>
                        <Box mb={'0.5rem'}>
                            To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.
                        </Box>
                    </Box>
                    <Box  flex={1}>
                        <Box mb={'0.5rem'}>
                            <span className={classes.grayColor}>Cast:</span>Nobunaga Shimazaki, Akio Otsuka, Hochu Otsuka, more
                        </Box>
                        <Box mb={'0.5rem'}>
                            <span className={classes.grayColor}>Genres:</span>Shounen Anime, Action Anime, Japanese
                        </Box>
                        <Box mb={'0.5rem'}>
                            <span className={classes.grayColor}>This show is:</span>Violent, Exciting
                        </Box>
                    </Box>
                </Flex>
                <Flex gap={'2rem'}>
                    <Box flex={2}>
                        <Box mb={'0.5rem'} fontSize={'2xl'} fontWeight={'700'}>
                            Episodes
                        </Box>
                        <Box mb={'0.5rem'}>
                            Season 1: <span className={classes.genreBadge}>U/A 16+</span>
                            gore, violence
                        </Box>
                        
                        <Box mb={'0.5rem'}>
                            To gain the skills he needs to surpass his powerful father, Baki enters Arizona State Prison to take on the notorious inmate known as Mr. Unchained.
                        </Box>
                    </Box>
                    <Box  flex={1} position={'relative'} zIndex={'5'}>
                        <Accordion allowToggle position={'absolute'} minW={'15rem'} border={'1px solid currentColor'} >
                            <AccordionItem border={'none'}>
                                <AccordionButton borderBottom={'1px solid currentColor'}>
                                    <Box>Episode 1</Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                {
                                    seasonItems.map(season => (
                                        <AccordionPanel key={season.id} backgroundColor={'rgb(20, 20, 20)'}>
                                            <Link to="#" className={classes.seasonPanel}>
                                                <Box>Season {season.season}</Box>
                                                <Box>({season.episodes} episodes)</Box>
                                            </Link>
                                        </AccordionPanel>
                                    ))
                                }
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Flex>
                <TitleCardContainer />
            </ModalBody>
        </ModalContent>
        </Modal>
    </>
}

export default SingleVideo;