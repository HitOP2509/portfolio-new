import "./About.css";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-title">
                    <h2 className="text">About Me</h2>
                </div>
                <div className="about-sub">
                    <div className="about-image">
                        <img
                            src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-2.6775304f.jpg&w=640&q=75"
                            alt="about image"
                        />
                    </div>
                    <div className="about-texts">
                        <p>
                            Hi, I am Rohit, a Front-end developer with a passion
                            for creating beautiful, functional, and
                            user-centered digital experiences. I am always
                            looking for new and innovative ways to bring ideas
                            to life.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
