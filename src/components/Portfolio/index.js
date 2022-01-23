import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: 'The Scroll Down',
            photo: 'thescrolldown.png',
            link: 'https://the-scroll-down.herokuapp.com/',
            github: 'https://github.com/aaronRobinett/the_scroll_down'
        }
    ])
    return (
        <section id="portfolio">
            {projects.map((project) => (
                <Project key={project.name} currentProject={project}></Project>
            ))}
        </section>
    );
}

export default Portfolio;