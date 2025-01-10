import React from 'react';
import HeroSection from "../components/home/HeroSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";
import AboutSection from "../components/home/AboutSection.tsx";
import ApproachSection from "../components/home/ApproachSection.tsx";
import DifferenceSection from "../components/home/DifferenceSection.tsx";
import WhyChooseUsSection from "../components/home/WhyChooseUs.tsx";


const HomePage: React.FC = () => (
    <div>
            <HeroSection />
            <ServicesSection />
            <AboutSection />
            <DifferenceSection />
            <ApproachSection />
            <WhyChooseUsSection />
    </div>
);



export default HomePage;
