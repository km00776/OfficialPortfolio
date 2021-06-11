import Header from "./Header";
import ProjectSection from "./Project-Section";
import ContactSection from "./Contact-section";



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
                        <p>Looking for any type of development roles, whether that is Front-end, Back-end or even Full-stack! I'm experienced with Java, Javascript, React.js, Node.js, Express.js, Next.js, PostgreSQL, SQL, Firebase and Flutter.</p>
                        <a href='#project'>Projects</a>
                    </div>
                    <div>
                        
                    </div>
                    <ul class="social">
                        <li><a href="https://www.linkedin.com/in/karthikan-murugathas-563967131/"><img src="https://i.ibb.co/YNLnb4L/rsz-11rsz-rsz-linkedin-1.png"/></a></li>
                        <li><a href="https://github.com/km00776?tab=repositories"><img src="https://i.ibb.co/1J0gXP8/rsz-1githubnew0205.png" /></a></li>
                        <li><a href="mailto:kmurugathas@gmail.com"><img src="https://i.ibb.co/8xyFqCr/emailrealone.png" /></a></li>
                    </ul>
                </section>
                <ProjectSection />

            </div>
        </>




    )
}

export default Mainsection;