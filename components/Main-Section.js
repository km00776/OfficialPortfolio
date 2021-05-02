

const Mainsection = () => {
    return (
        <section class="showcase">
            <header>
                <h2 class="logo">Portfolio</h2>
                <div class="toggle"></div>
            </header>
            <video src="/video.MP4" muted loop autoPlay></video>
            <div class="overlay"></div>
            <div class="text">
                <h2>Welcome!</h2>
                <h3>My name is <b>Karthikan</b></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>
                <a href="#">Projects</a>
            </div>
            <ul class="social">
                <li><a href="#"><img src="https://i.ibb.co/YNLnb4L/rsz-11rsz-rsz-linkedin-1.png" /></a></li>
                <li><a href="#"><img src="https://i.ibb.co/1J0gXP8/rsz-1githubnew0205.png" /></a></li>

            </ul>
        </section>
        
    )
}

export default Mainsection;