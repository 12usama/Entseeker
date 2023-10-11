

const About = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/kHT5Mkk/Entertainment.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className=" text-center text-6xl text-violet-500 font-semibold">About <span className="text-pink-500">Us</span></h1>
                        <p className="text-xl text-white font-normal mt-3">Welcome to <span className="text-green-400">ENTSEEKER</span>, where we bring your entertainment dreams to life! We're more than just event organizers; we're passionate about creating unforgettable experiences across various entertainment domains.</p>
                        <br />
                        <p className="text-xl text-white font-normal"><span className="text-green-400">ENTSEEKER</span> was born from a shared love for music, art, and the thrill of live performances. We embarked on a journey to craft exceptional moments that would leave a lasting impact. Since then, we've been dedicated to curating and managing a wide array of events, from heart-pounding music festivals to soul-stirring theater performances.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;