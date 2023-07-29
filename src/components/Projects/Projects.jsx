import "./Projects.css";
import Card from "../Card/Card";

const Projects = () => {
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
            imgSrc: "https://i.ytimg.com/vi/47L5LjYlZWA/maxresdefault.jpg",
            title: "ExploreWorld",
            desc: "A tour booking Web-App using React, Tailwind CSS, Firebase, React Router, & Redux Toolkit.",
            gitLink: "https://github.com/HitOP2509/exploreworld-tour-app-react",
            liveLink: "https://exploreworldreact.web.app/",
        },
        {
            id: 3,
            imgSrc: "https://appening.xyz/wp-content/uploads/2018/08/webapps-770x516.jpg",
            title: "ExploreWorld",
            desc: "A tour booking Web-App using React, Tailwind CSS, Firebase, React Router, & Redux Toolkit.",
            gitLink: "https://github.com/HitOP2509/exploreworld-tour-app-react",
            liveLink: "https://exploreworldreact.web.app/",
        },
        {
            id: 4,
            imgSrc: "./images/project-images/explore-world-min.png",
            title: "ExploreWorld",
            desc: "A tour booking Web-App using React, Tailwind CSS, Firebase, React Router, & Redux Toolkit.",
            gitLink: "https://github.com/HitOP2509/exploreworld-tour-app-react",
            liveLink: "https://exploreworldreact.web.app/",
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
