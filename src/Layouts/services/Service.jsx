import Movies from "../Home/movies/Movies";


const Service = () => {
    return (
        <div className="max-w-7xl mx-auto mt-8 mb-8">
            <h1 className="text-5xl text-center font-bold mb-6"><span className="text-blue-500">Services</span> those we provide</h1>
            <div className="grid lg:grid-cols-3 gap-3">
                <div className="border bg-green-300 rounded-lg p-5">
                    <h1 className="text-2xl font-semibold mb-2">Concerts and Music Festivals:</h1>
                    <p>Organizing and promoting live music events, from intimate shows to large-scale festivals.</p>
                </div>
                <div className="border bg-red-300 rounded-lg p-5">
                    <h1 className="text-2xl font-semibold mb-2">Theater and Performing Arts:</h1>
                    <p>Managing and coordinating theater productions, including plays, musicals, and dance performances.</p>
                </div>
                <div className="border bg-blue-300 rounded-lg p-5">
                    <h1 className="text-2xl font-semibold mb-2">Film Screenings and Premieres:</h1>
                    <p>Hosting film screenings, movie premieres, and film-related events with red carpet experiences.</p>
                </div>
                <div className="border bg-yellow-300 rounded-lg p-5">
                    <h1 className="text-2xl font-semibold mb-2">Comedy Shows:</h1>
                    <p>Curating and promoting stand-up comedy nights, comedy festivals, and comedy club events.</p>
                </div>
                <div className="border bg-violet-300 rounded-lg p-5">
                    <h1 className="text-2xl font-semibold mb-2">Sports Events:</h1>
                    <p>Planning and executing sports events, including championships, tournaments, and matches.</p>
                </div>
                <div className="border bg-orange-300 rounded-lg p-5">
                    <h1 className="text-2xl font-semibold mb-2">Photography Workshops:</h1>
                    <p>Offering photography workshops and courses for aspiring photographers to learn and improve their skills.</p>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="text-4xl font-bold text-center mb-3">Previous Events</h1>
                <div className="border border-green-200 bg-green-200">
                    <h1 className="text-3xl font-semibold text-blue-500 text-center mb-2">Movies we have watched</h1>
                    <Movies></Movies>
                </div>
            </div>

            <div className="mt-8">
                <h1 className="text-3xl text-center text-red-500 font-semibold mb-3">Last 3 matches we have watched</h1>
                <div className="overflow-x-auto border border-purple-200 bg-purple-200">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Match</th>
                                <th>Result</th>
                                <th>Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>Bangladesh vs India</td>
                                <td>Bangladesh win by 6 wickets</td>
                                <td>1231</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>Real Madrid vs Barcelona</td>
                                <td>RM 3-2 FCB</td>
                                <td>1725</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>Mancity vs Man United</td>
                                <td>MC 2-2 MU</td>
                                <td>920</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Service;