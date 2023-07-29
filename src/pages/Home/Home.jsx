import "./Home.css";

import ContactUs from "../../components/ContactUs/ContactUs";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Projects />
            <ContactUs />
        </>
    );
};

export default Home;
