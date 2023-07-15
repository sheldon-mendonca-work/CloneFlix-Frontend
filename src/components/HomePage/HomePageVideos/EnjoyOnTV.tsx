import classes from './HomePageVideos.module.css';

const EnjoyOnTV = () => {
    return <div className={classes.mainContainer}>
        <img src={'/SiteImages/tv.png'} alt="tv" className={classes.mainContainerImage}/>
        <div className={classes.enjoyTVVidDiv}>
            <video autoPlay muted loop>
                <source src="/SiteImages/video-tv-in-0819.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
}

export default EnjoyOnTV;