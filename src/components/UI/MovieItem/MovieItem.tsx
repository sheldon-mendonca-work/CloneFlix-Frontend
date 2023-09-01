import { Link } from 'react-router-dom';
import { ChevronDownIcon, LikeIcon, PlayIcon, PlusIcon } from '../../Util/svg-icons/svg-icons';
import PopoverHover from '../PopoverHover/PopoverHover';
import classes from './MovieItem.module.css';
import { useState } from 'react';

const MovieItem = () => {
    const [ showCardBody, setShowCardBody ] = useState(false);

    return <div className={`${classes.movieItem}`} onMouseEnter={()=>setShowCardBody(true)}  
    onMouseLeave={()=>setShowCardBody(false)}
    >
        <div className={`${classes.movieItemCard}  ${showCardBody ? classes.movieItemCardExpanded : ""}`} >
            <div className={classes.movieItemImgDiv}>
                <img className={classes.movieItemImg} src="NetflixImages/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJ.jpg" alt="Peaky Blinders" />
            </div>
            {showCardBody && <div className={classes.movieItemContent}>
                <div className={classes.buttonControls}>
                    <div className={classes.leftButtonControl}>
                        <PopoverHover text="Expand More"><button><PlayIcon className={classes.playIcon}/></button></PopoverHover>
                        <PopoverHover text="Add to 'My List'"><button><PlusIcon className={classes.plusIcon} /></button></PopoverHover>
                        <PopoverHover text="I like this"><button><LikeIcon className={classes.likeIcon} /></button></PopoverHover>
                    </div>
                    <PopoverHover text="Episodes & Info"><Link to='?jbv=1'><ChevronDownIcon className={classes.downIcon}/></Link></PopoverHover>
                </div>
                <div className={classes.movieMetaData}>
                    <span className={classes.genreBadge} >U/A</span>
                    <span className={classes.duration}>4 Seasonsg</span>
                    <span className={classes.playerFeatureBadge} >HD</span>
                </div>
                <div className={classes.movieTags}>
                    <span>Mind Bending</span>
                    <span className={classes.dot}></span>
                    <span>Suspenseful</span>
                    <span className={classes.dot}></span>
                    <span>Scifi</span>
                </div>
            </div>
            }
        </div>
    </div>
};

export default MovieItem;