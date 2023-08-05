import Footer from '../../Layout/Footer/Footer';
import HeaderHome from '../../Layout/HeaderHome/HeaderHome';
import ExploreRelatedTo from '../../UI/ExploreRelatedTo/ExploreRelatedTo';
import MovieListSlider from '../../UI/MovieListSlider/MovieListSlider';
import classes from './SearchPage.module.css';

const SearchPage = () => {
    return <main className={classes.searchMainPage}>
        <HeaderHome />
        <ExploreRelatedTo />
        <MovieListSlider />
        <MovieListSlider />
        <MovieListSlider />
        <div style={{height: '10rem', zIndex: -1}}>

        </div>
        <Footer />
    </main>
};

export default SearchPage;