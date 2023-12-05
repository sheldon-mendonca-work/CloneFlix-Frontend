import { useLocation } from 'react-router-dom';
import Footer from '../../Layout/Footer/Footer';
import HeaderHome from '../../Layout/HeaderHome/HeaderHome';
import BillBoard from '../../UI/BillBoard/BillBoard';
import MovieListSlider from '../../UI/MovieListSlider/MovieListSlider';
import SingleVideo from '../SingleVideo/SingleVideo';
import classes from './BrowsePage.module.css';
import { useAppDispatch, useAppSelector } from '../../../store/hookTypes';
import { Key, useEffect } from 'react';
import { fetchVideosList } from '../../../store/videoList/videoList-slice-actions';

const BrowsePage = () => {
    const { search } = useLocation();
    const dispatch = useAppDispatch();
    const videoList = useAppSelector(state => state.videoList.videoList);
    const videoListId = useAppSelector(state => state.videoList.videoListId);

    const query = new URLSearchParams(search);
    const paramField = query.get('jbv');

    useEffect(()=>{
        dispatch(fetchVideosList());
    }, [dispatch]);

    return <main className={classes.browseMainPage}>
        <HeaderHome />
        <BillBoard />
        {
            videoListId.map(videoId => {
                if(videoList[videoId as string][0]["reference"]["$type"] === "atom"){
                    return <span key={videoId as Key}></span>
                }else{
                    return <MovieListSlider videoId={videoId} key={videoId as Key}/>
                }
            })
        }
        <div style={{height: '10rem', zIndex: -1}}>
            { paramField && <SingleVideo /> }
        </div>
        <Footer />
    </main>
};

export default BrowsePage;