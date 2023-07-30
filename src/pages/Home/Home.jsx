import "./Home.css";

import ContactUs from "../../components/ContactUs/ContactUs";
import HeroSection from "../../components/HeroSection/HeroSection";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <div className="scroller">
            <HeroSection />
            <About />
            <Projects />
            <ContactUs />
        </div>
    );
};

export default Home;
