import { useLocation } from 'react-router-dom';
import Footer from '../../Layout/Footer/Footer';
import HeaderHome from '../../Layout/HeaderHome/HeaderHome';
import BillBoard from '../../UI/BillBoard/BillBoard';
import MovieListSlider from '../../UI/MovieListSlider/MovieListSlider';
import SingleVideo from '../SingleVideo/SingleVideo';
import classes from './BrowsePage.module.css';

const BrowsePage = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const paramField = query.get('jbv');

    console.log(paramField)

    return <main className={classes.browseMainPage}>
        <HeaderHome />
        <BillBoard />
        <MovieListSlider />
        <MovieListSlider />
        <MovieListSlider />
        <div style={{height: '10rem', zIndex: -1}}>
            { paramField && <SingleVideo /> }
        </div>
        <Footer />
    </main>
};

export default BrowsePage;