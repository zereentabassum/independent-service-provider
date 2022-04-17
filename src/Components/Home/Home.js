import React from 'react';
import ExtraSection from '../ExtraSection/ExtraSection';
import Footer from '../Footer/Footer';
import HeadingSection from '../HeadingSection/HeadingSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <HeadingSection></HeadingSection>
            <Services></Services>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;