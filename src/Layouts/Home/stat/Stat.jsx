

const Stat = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-medium text-purple-400 mt-10 mb-5">Stats of our next Event:</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow text-center flex justify-center">

                <div className="stat">
                    <div className="stat-title">Movie Tickets</div>
                    <div className="stat-value">1K</div>
                    <div className="stat-desc">50% for 1st 100</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Booked Ticket</div>
                    <div className="stat-value">750</div>
                    <div className="stat-desc">↗︎ (75%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Available Tickets</div>
                    <div className="stat-value">250</div>
                    <div className="stat-desc">15% for the rest</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;