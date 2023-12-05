import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, LikeIcon, PlayIcon, PlusIcon } from '../../Util/svg-icons/svg-icons';
import PopoverHover from '../PopoverHover/PopoverHover';
import classes from './MovieItem.module.css';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hookTypes';
import { videoListActions } from '../../../store/videoList/videoList-slice';

const MovieItem: React.FC<{movieItem: {
        [key: string]: any;
    }}> = ({movieItem}) => {

    const [ showCardBody, setShowCardBody ] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const hours = Math.floor((movieItem.itemSummary?.value?.infoDensityRuntime??0)/60/60);
    const minutes = Math.floor(((movieItem.itemSummary?.value?.infoDensityRuntime??0)/60)%60)
    
    const movieImageURL = movieItem.itemSummary?.value?.boxArt?.url.slice(0,79) + ".jpg";

    const showEpisodesHandler = () => {
        dispatch(videoListActions.updateCurrentVideo(movieItem))
        navigate('?jbv=1');
    }

    return <div className={`${classes.movieItem} ${showCardBody ? classes.movieItemExp : ""}`} 
    >
        <div className={`${classes.movieItemCard}  ${showCardBody ? classes.movieItemCardExpanded : ""}`} onMouseEnter={()=>setShowCardBody(true)}  
    onMouseLeave={()=>setShowCardBody(false)}
    >
            <div className={classes.movieItemImgDiv}>
                <img className={classes.movieItemImg} src={movieImageURL} alt={movieItem.itemSummary?.value?.title} />
            </div>
            {showCardBody && <div className={classes.movieItemContent}>
                <div className={classes.buttonControls}>
                    <div className={classes.leftButtonControl}>
                        <PopoverHover text="Expand More"><button><PlayIcon className={classes.playIcon}/></button></PopoverHover>
                        <PopoverHover text="Add to 'My List'"><button><PlusIcon className={classes.plusIcon} /></button></PopoverHover>
                        <PopoverHover text="I like this"><button><LikeIcon className={classes.likeIcon} /></button></PopoverHover>
                    </div>
                    <PopoverHover text="Episodes & Info"><span onClick={showEpisodesHandler}><ChevronDownIcon className={classes.downIcon}/></span></PopoverHover>
                </div>
                <div className={classes.movieMetaData}>
                    <span className={classes.genreBadge} >{movieItem.itemSummary?.value?.maturity?.rating?.value}</span>
                    {
                        movieItem.itemSummary?.value?.numSeasonsLabel !== null &&<span className={classes.duration}>{movieItem.itemSummary?.value?.numSeasonsLabel}</span>
                    }
                    {
                        movieItem.itemSummary?.value?.infoDensityRuntime !== null && movieItem.itemSummary?.value?.infoDensityRuntime > 0 &&<span className={classes.duration}>{hours>0&&`${hours}h `}{`${minutes} m`}</span>
                    }
                    <span className={classes.playerFeatureBadge} >HD</span>
                </div>
                <div className={classes.movieTags}>
                    <span>{movieItem.itemSummary?.value?.maturity?.rating?.reasons[0]?.reasonDescription}</span>
                    <span className={classes.dot}></span>
                    <span>{movieItem.itemSummary?.value?.maturity?.rating?.reasons[1]?.reasonDescription}</span>
                    <span className={classes.dot}></span>
                    <span>{movieItem.itemSummary?.value?.maturity?.rating?.reasons[2]?.reasonDescription}</span>
                </div>
            </div>
            }
        </div>
    </div>
};

export default MovieItem;