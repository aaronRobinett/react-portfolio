import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {

    const [projects] = useState([
        {
            name: 'The Scroll Down',
            photo: 'thescrolldown.jpg',
            link: 'https://the-scroll-down.herokuapp.com/',
            github: 'https://github.com/aaronRobinett/the_scroll_down'
        },
        {
            name: 'Bark',
            photo: 'bark_v2.jpg',
            link: 'https://bark-2.herokuapp.com/',
            github: 'https://github.com/aaronRobinett/bark_2.0'
        },
        {
            name: 'Budget Tracker',
            photo: 'budget-tracker.jpg',
            link: 'https://shrouded-badlands-98468.herokuapp.com/',
            github: 'https://github.com/aaronRobinett/budget-tracker'
        }
    ])
    return (
        <section id="portfolio">
            <div className="flex-row">
                {projects.map((project) => (
                    <Project key={project.name} currentProject={project}></Project>

                ))}
                {/* <Project currentProject={projects[0]}></Project> */}
            </div>
        </section>
    );
}

export default Portfolio;