// src/components/LandingPage.js
import React from 'react';
import HeroSection from './sections/HeroSection';
import FeatureSection from './sections/FeatureSection';
import DetailSection from './sections/DetailSection';
import ReviewSection from './sections/ReviewSection';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

const LandingPage = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <HeroSection />
            <FeatureSection />
            <DetailSection />
            <ReviewSection />
            <CTASection />
            <Footer />
        </div>
    );
};

export default LandingPage;
