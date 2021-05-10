import Head from 'next/head';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import ProjectContainer from './ProjectContainer';

const LargeSize = () => {
    return (
        <>
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
        </>
    )
}

const MediumSize = () => {
    return (
        <>
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
      
        </>
    )
}





const ProjectSection = () => {

    const [size, setSize] = useState(true);
    
    useEffect(() => {
          const mediaQuery = window.matchMedia('(min-width: 1920px)');

          if(screen.width === mediaQuery) {
            setSize(true);
            console.log(screen.width);
          }
          else {
             setSize(false);
             console.log("res is not 1920")
             console.log(screen.width);
          }
    }, [])

    return (
        <section className="ProjectSection" id="project">
            <div className="overlay"></div>
            <div className="title">
                <h2 className="project">Projects</h2>
            </div>
            <div className="Projects">
                    {size ? <LargeSize /> : <MediumSize /> }
            </div>
        </section>


    )
}

export default ProjectSection;