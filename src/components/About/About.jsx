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
                        <img src="/images/about-me.jpg" alt="about image" />
                    </div>
                    <div className="about-texts">
                        <p>
                            Hi, I am Rohit, a Front-end developer with a passion
                            for creating beautiful, functional, and
                            user-centered digital experiences. I am always
                            looking for new and innovative ways to bring ideas
                            to life.
                        </p>
                        <div className="skills">
                            <h3>My Skills:</h3>
                            <div>
                                <span title="html">
                                    <img
                                        src="/images/skills-images/html.svg"
                                        alt="html"
                                    />
                                </span>
                                <span title="CSS">
                                    <img
                                        src="/images/skills-images/css.svg"
                                        alt="css"
                                    />
                                </span>
                                <span title="JavaScript">
                                    <img
                                        src="/images/skills-images/javascript.svg"
                                        alt="javascript"
                                    />
                                </span>
                                <span title="Tailwind">
                                    <img
                                        src="/images/skills-images/tailwind.svg"
                                        alt="tailwind"
                                    />
                                </span>
                                <span title="React">
                                    <img
                                        src="/images/skills-images/react.svg"
                                        alt="react"
                                    />
                                </span>
                                {/* <span><img
                                        src="/images/skills-images/html.svg"
                                        alt="html"
                                    /></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
