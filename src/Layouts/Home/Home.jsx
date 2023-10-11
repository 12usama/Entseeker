import Cards from "./cards/Cards";
import Stat from "./stat/Stat";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-[60vh] lg:h-[80vh] bg-cover  bg-[url('https://i.ibb.co/bsmXHmz/Enjoy-the-Time-Enjoy-your-life.png')]">
                <div className="grid justify-center h-full">
                    <h1 className="text-6xl font-bold text-white mt-5">Stay With Entseeker</h1>
                </div>
            </div>
            <div className="grid mt-8">
                <h1 className="text-4xl font-semibold text-center mb-5">The next show comming in: </h1>
                <div className="grid grid-flow-col justify-center gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 1 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 49 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
            <Cards></Cards>
            <Stat></Stat>
            <div className="hero  bg-yellow-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Tv1fbs1/ucl.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-green-500">Up Comming Event!</h1>
                        <p className="text-xl py-6">The UCL final match is knocking at the door. Prebook tickets to get the feelings of watching in the stedium.</p>
                        <button className="btn btn-success">Book Tickets</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;