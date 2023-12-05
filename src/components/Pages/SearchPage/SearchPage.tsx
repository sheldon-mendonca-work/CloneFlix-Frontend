import Footer from '../../Layout/Footer/Footer';
import HeaderHome from '../../Layout/HeaderHome/HeaderHome';
import ExploreRelatedTo from '../../UI/ExploreRelatedTo/ExploreRelatedTo';
import MovieListSlider from '../../UI/MovieListSlider/MovieListSlider';
import classes from './SearchPage.module.css';

const SearchPage = () => {
    return <main className={classes.searchMainPage}>
        <HeaderHome />
        <ExploreRelatedTo />
        <MovieListSlider videoId={"NES_30AB83E0FBAF5B8D959F3CE51919A8-3895CC532878C7-8F598A8B66_p_1693655775594"}/>
        <MovieListSlider videoId={"NES_30AB83E0FBAF5B8D959F3CE51919A8-3895CC532878C7-8F598A8B66_p_1693655775594"}/>
        <MovieListSlider videoId={"NES_30AB83E0FBAF5B8D959F3CE51919A8-3895CC532878C7-8F598A8B66_p_1693655775594"}/>
        <div style={{height: '10rem', zIndex: -1}}>

        </div>
        <Footer />
    </main>
};

export default SearchPage;