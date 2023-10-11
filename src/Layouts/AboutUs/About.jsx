

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
            <div className="mt-10 ml-16 lg:ml-10">
                <h1 className="text-4xl text-center font-bold">Meet the Team</h1>
                <p className="text-xl text-center">Behind the scenes, a talented and dedicated team powers our passion. Get to know the individuals who make it all happen:</p>
                <div className="grid lg:grid-cols-3 g-10">
                    <div className="card w-96 bg-red-200 shadow-xl mt-4">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/5hVtFKd/event-manager.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Mr. Alex</h2>
                            <h1 className="text-xl font-semibold text-green-400">Event Manager</h1>
                            <p>He manages every event with his own team.</p>
                            <p className="text-blue-500 font-semibold">alex29@gmail.com</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-blue-200 shadow-xl mt-4">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/0FphKGg/own.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Mr. Usama</h2>
                            <h1 className="text-xl font-semibold text-red-400">Owner</h1>
                            <p>He is the owner of the Entseeker.</p>
                            <p className="text-blue-500 font-semibold">usama39@gmail.com</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-green-200 shadow-xl mt-4">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/1RC1HX2/event-planner.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Mr. John</h2>
                            <h1 className="text-xl font-semibold text-blue-400">Event Planner</h1>
                            <p>He plans every event with his own team.</p>
                            <p className="text-blue-500 font-semibold">alex29@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-4xl text-center font-bold">Our Vision and Mission</h1>
                <div className="flex flex-col w-full lg:flex-row mt-5 mb-10">
                    <div className="grid flex-grow h-32 card bg-purple-300 rounded-box place-items-center px-5">
                        <p><span className="text-xl font-semibold">Vision:</span> To be the go-to destination for the finest entertainment experiences, setting new standards for event management.</p>
                    </div>
                    <div className="divider lg:divider-horizontal">AND</div>
                    <div className="grid flex-grow h-32 card bg-pink-300 rounded-box place-items-center px-5">
                        <p><span className="text-xl font-semibold">Mission:</span> We're on a mission to provide you with extraordinary entertainment events that will leave you with memories to cherish.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;