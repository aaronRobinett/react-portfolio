import React from "react";

function Project(props) {
    const { currentProject } = props;
    return (
        <section>
            <div>
                <img src={require(`../../assets/${currentProject.photo}`).default}
                    alt={currentProject.name} className="img-thumbnail mx-1" />
            </div>
            <h2>{`${currentProject.name}`}</h2>
            <a href={`${currentProject.link}`}>Link to deployed application.</a>
            <a href={`${currentProject.github}`}>Link to github repository.</a>
        </section>
    )
}

export default Project;