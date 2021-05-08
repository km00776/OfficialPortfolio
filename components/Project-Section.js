import Head from 'next/head';
import Link from 'next/link'
import ProjectContainer from './ProjectContainer';

const ProjectSection = () => {
    return (

        <section className="ProjectSection" id="project">
            <div className="overlay"></div>
            <div className="title">
                <h2 className="project">Projects</h2>
            </div>
            <div className="Projects">
                <ProjectContainer />
                <ProjectContainer />
                <ProjectContainer />
                <ProjectContainer />
            </div>
        </section>


    )
}

export default ProjectSection;