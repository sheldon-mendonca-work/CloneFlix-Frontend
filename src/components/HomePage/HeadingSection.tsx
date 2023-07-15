import SelectLanguage from '../Util/SelectLanguage/SelectLanguage';
import { NetflixIcon } from '../Util/svg-icons/svg-icons';
import classes from './HomePage.module.css';
import RegisterEmailHome from './RegisterEmailHome';

const HeadingSection = () => {
    return <section className={classes.headingSection}>
    
    <div className={classes.headingBanner}>
        <img src='SiteImages/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Heading-background' className={classes.headingBannerImg}/>
    </div>
    <header className={classes.headingHeader}>
        <div><NetflixIcon className={classes.netflixIcon}/></div>
        <div className={classes.headingActions}>
            <SelectLanguage type='heading'/>
            <button>Sign In</button>
        </div>
    </header>
    <div className={classes.headingContentDiv}>
        <div className={classes.headingContwbent}>
            <div className={classes.textTitle}>Unlimited movies, TV shows and more</div>
            <div>Watch anywhere. Cancel anytime.</div>
            <RegisterEmailHome />
        </div>
    </div>
</section>
};

export default HeadingSection;