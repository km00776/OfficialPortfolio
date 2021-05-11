import Head from 'next/head';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import ProjectContainer from './ProjectContainer';



const ResponsiveContainer = () => {
    const [size, setSize] = useState(false);
    useEffect(() => {
        let widthMatch = window.matchMedia("(min-width: 1920px)");
        widthMatch.addEventListener("change", function (mm) {
            if (mm.matches) {
                setSize(true);
            }
            else {
                setSize(false);
            }
        });
    })


}

// we get the screen size, 
// if the screen size width is equal to 1920 or higher, we render 4 components. 






const ProjectSection = () => {

    const [size, setSize] = useState(true);
    useEffect(() => {
        let widthMatch = window.matchMedia("(min-width: 1920px)");
        widthMatch.addEventListener("change", function (mm) {
            if (mm.matches) {
                setSize(true);
            }
            else {
                setSize(false);
            }
        });
    })

    return (
        <section className="ProjectSection" id="project">
            <div className="overlay"></div>
            <div className="title">
                <h2 className="project">Projects</h2>
            </div>
            <div className="Projects">
                {size ? <> <ProjectContainer /> <ProjectContainer /> <ProjectContainer /> <ProjectContainer /> </> : <> <ProjectContainer /> <ProjectContainer /> <ProjectContainer /> </>}

            </div>
        </section>


    )
}

export default ProjectSection;