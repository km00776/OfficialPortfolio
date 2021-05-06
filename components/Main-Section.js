import Header from "./Header";
import ProjectSection from "./Project-Section"




const Mainsection = () => {

    return (
        <>
            <div class="container">
                <section class="showcase">
                    <Header />
                    <video src="./bg.mp4" autoplay="autoplay" muted loop />
                    <div class="overlay"></div>
                    <div class="text">
                        <h2>Hi!</h2>
                        <h3>my name is <span>Karthikan</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
                        <a href='#project'>Projects</a>
                    </div>
                    <ul class="social">
                        <li><a href="https://www.linkedin.com/in/karthikan-murugathas-563967131/"><img src="https://i.ibb.co/YNLnb4L/rsz-11rsz-rsz-linkedin-1.png" /></a></li>
                        <li><a href="https://github.com/km00776?tab=repositories"><img src="https://i.ibb.co/1J0gXP8/rsz-1githubnew0205.png" /></a></li>
                    </ul>
                </section>
                <ProjectSection />
            </div>
        </>




    )
}

export default Mainsection;