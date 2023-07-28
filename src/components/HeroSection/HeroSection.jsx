import "./HeroSection.css";
import { ReactComponent as DownloadArrow } from "../../assets/download-arrow.svg";
import { Link } from "react-router-dom";
// `import { ReactComponent as FBIcon } from "../../assets/socials/facebook.svg";
// import { ReactComponent as GitIcon } from "../../assets/socials/github.svg";
// import { ReactComponent as TwitterIcon } from "../../assets/socials/twitter.svg";
// import { ReactComponent as LinkedinIcon } from "../../assets/socials/linkedin.svg";
// import { Link } from "react-router-dom";`

const HeroSection = () => {
    return (
        <section className="master-section">
            <div className="container">
                <img
                    src="https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-pic-1.d43c09fa.png&w=1920&q=75"
                    className="master-image"
                />

                <div className="master-items">
                    <div className="texts">
                        <h1>
                            Hi, I am <span className="name">Rohit Singh</span>
                        </h1>
                        <p>
                            Dedicated Front-end developer crafting intuitive
                            user experiences and transforming ideas into elegant
                            and efficient web applications.
                        </p>
                    </div>
                    <div className="buttons">
                        <Link to="/#contact">
                            <button>Contact</button>
                        </Link>

                        <button>
                            Resume <DownloadArrow />
                        </button>
                    </div>
                    {/* <div className="socials">
                        <Link to="https://">
                            <FBIcon />
                        </Link>
                        <Link to="https://">
                            <GitIcon />
                        </Link>
                        <Link to="https://">
                            <TwitterIcon />
                        </Link>
                        <Link to="https://">
                            <LinkedinIcon />
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
