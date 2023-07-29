/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ imgSrc, title, desc, gitLink, liveLink }) => {
    return (
        <article className="card">
            <div className="card-main">
                <img src={imgSrc} alt="projects Image" />
                <h3>{title}</h3>
                <p className="clamp">{desc}</p>
            </div>
            <div className="card-options">
                <Link to={gitLink} target="_blank" rel="noreferrer">
                    {"<View Code/>"}
                </Link>
                <Link to={liveLink} target="_blank" rel="noreferrer">
                    View Live
                </Link>
            </div>
        </article>
    );
};

export default Card;
