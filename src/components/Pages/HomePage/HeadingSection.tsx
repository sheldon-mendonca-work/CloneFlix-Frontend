import { Box, Center, Container } from '@chakra-ui/react';
import classes from './HomePage.module.css';
import RegisterEmailHome from './RegisterEmailHome';
import Header from '../../Layout/Header/Header';

const HeadingSection = () => {
    return <section className={classes.headingSection}>
    
    <div className={classes.headingBanner}>
        <img src='SiteImages/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='Heading-background' className={classes.headingBannerImg}/>
    </div>
    <Header />
    <Container maxW={'container.lg'} className={classes.headingContentDiv}>
        <Box className={classes.headingContent}>
            <Center className={classes.textTitle}>Unlimited movies, TV shows and more</Center>
            <Center>Watch anywhere. Cancel anytime.</Center>
            <RegisterEmailHome />
        </Box>
    </Container>
</section>
};

export default HeadingSection;