import React from 'react'
import portfolioweb from '../assets/portfolioweb.png'
import alien_invasion from '../assets/alien_invasion.jpg'
import frisbee from '../assets/frisbee.jpeg'
import auctionate1 from '../assets/auctionate1.png'
import falcon from '../assets/falcon.png'
import wiki from '../assets/wiki.jpeg'

const Projects = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="container projects__container">
                <article className="projects__item hover">
                    <div className="projects-img">
                        <img src={portfolioweb} alt="project image" />
                    </div>
                    <h3>Portfolio Website</h3>
                    <a  className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={falcon} alt="project image" />
                    </div>
                    <h3>Tourly your journey planner</h3>
                    <a href="https://github.com/pruthvirajpatil2024/Tourly-Your-Journey-Planner.git" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={auctionate1} alt="project image" />
                    </div>
                    <h3>Responsive e-commerse website</h3>
                    <a href="https://github.com/pruthvirajpatil2024/responsive-e-commerce-website.git" className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={wiki} alt="project image" />
                    </div>
                    <h3>Wiki</h3>
                    <a className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={frisbee} alt="project image" />
                    </div>
                    <h3>Ultimate Frisbee Site</h3>
                    <a className="btn" target="_blank">Github</a>
                </article>
                <article className="projects__item">
                    <div className="projects-img">
                        <img src={alien_invasion} alt="project image" />
                    </div>
                    <h3>Alien Invasion Game</h3>
                    <a className="btn" target="_blank">Github</a>
                </article>
            </div>
            <div className="more">
                <a href="https://github.com/pruthvirajpatil2024" target="_blank" className="btn btn-primary center">See More</a>
            </div>
        </section>
    )
}

export default Projects