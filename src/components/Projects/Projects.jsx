import "./Projects.css";
import Card from "../Card/Card";

const Projects = () => {
    // My portfolio developed using React, CSS, React Router,
    const projects = [
        {
            id: 1,
            imgSrc: "./images/project-images/explore-world-min.png",
            title: "ExploreWorld",
            desc: "A tour booking Web App using React, Tailwind CSS, Firebase, React Router, & Redux Toolkit.",
            gitLink: "https://github.com/HitOP2509/exploreworld-tour-app-react",
            liveLink: "https://exploreworldreact.web.app/",
        },
        {
            id: 2,
            imgSrc: "./images/project-images/portfolio-snap.png",
            title: "Portfolio",
            desc: "My portfolio developed using React & CSS. Deployed on Firebase & connected with Github for CI/CD.",
            gitLink: "https://github.com/HitOP2509/portfolio-new",
            liveLink: "https://rohitsingh-portfolio.web.app",
        },
        {
            id: 3,
            imgSrc: "./images/project-images/bankist.png",
            title: "Bankist",
            desc: "Built a landing page for an imaginary bank using HTML, CSS, & Vanilla JS while learning JS. Deployed on Firebase.",
            gitLink: "https://github.com/HitOP2509/Bankist-DOM",
            liveLink: "https://bankist-js-dom.web.app/",
        },
    ];
    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects-title">
                    <h2 className="text">Projects</h2>
                </div>
                <div className="card-container">
                    {projects.map((p) => (
                        <Card
                            key={p.id}
                            title={p.title}
                            gitLink={p.gitLink}
                            liveLink={p.liveLink}
                            desc={p.desc}
                            imgSrc={p.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
