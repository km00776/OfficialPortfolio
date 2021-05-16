import Head from 'next/head';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import ProjectContainer from './ProjectContainer';



const ResponsiveContainer = () => {
     const [size, setSize] = useState(true);
     
     if(typeof window !== "undefined") {
        let widthMatch = window.matchMedia("(min-width: 1920px)");
        widthMatch.addEventListener("change", function (mm) {
            if (mm.matches) {
                setSize(true);
            }
            else {
                setSize(false);
            }
        });
    }

   

    if(size === true) {
        return(
            <>
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            </>
        )
    }
    else {
        return (
            <>
            <ProjectContainer />
            <ProjectContainer />
            <ProjectContainer />
            </>
        )

    }
    


}

// we get the screen size, 
// if the screen size width is equal to 1920 or higher, we render 4 components. 






const ProjectSection = () => {
    return (
        <section className="ProjectSection" id="project">
            <div className="overlay"></div>
            <div className="title">
                <h2 className="project">Projects</h2>
            </div>
            <div className="Projects">
                 <ResponsiveContainer />
            </div>
        </section>


    )
}

export default ProjectSection;