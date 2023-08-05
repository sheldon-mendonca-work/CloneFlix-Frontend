import React from 'react';
import HeadingSection from './HeadingSection';
import SplitHalfSection from './SplitHalfSection';
import FAQHomeSection from './FAQHomeSection';
import Footer from '../..//Layout/Footer/Footer';
import classes from './HomePage.module.css';
import EnjoyOnTV from './HomePageVideos/EnjoyOnTV';
import ProfileKids from './HomePageVideos/ProfileKids';

const HomePage:React.FC = () => {
    return <main className={classes.homePage}>
        <HeadingSection />

        <SplitHalfSection 
            title='Enjoy on your TV' 
            content='Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.' 
            image={<EnjoyOnTV />}
            order={1}
        />

        <SplitHalfSection 
            title='Download your shows to watch offline' 
            content='Save your favourites easily and always have something to watch.' 
            image={<EnjoyOnTV />} 
            order={-1}
        />

        <SplitHalfSection 
            title='Watch everywhere' 
            content='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' 
            image={<EnjoyOnTV />}
            order={1}
        />

        <SplitHalfSection 
            title='Create profiles for kids' 
            content='Send children on adventures with their favourite characters in a space made just for them—free with your membership.' 
            image={<ProfileKids />}
            order={-1}
        />

        <FAQHomeSection />

        <Footer />
    </main>
}

export default HomePage;