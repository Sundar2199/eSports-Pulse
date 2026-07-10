export function TournamentModal({ tournament, onClose }) {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm transition-all duration-300 shadow-2xl">

            <div className=" grid grid-cols-2 gap-4 bg-slate-900 text-white w-[700px] max-w-[90%] justify-center items-center border border-slate-600 rounded-2xl p-10 ">


                <h1 className="font-black text-xl">{tournament.name}</h1>

                <div className="grid grid-cols-2 gap-4">

                    <p className="text-slate-400 font-semibold">💰 Prize Pool</p>

                    <p>${tournament.prizePool.toLocaleString()}</p>

                    <p className="text-slate-400 font-semibold">📍 Venue</p>

                    <p >{tournament.venue}</p>

                    <p className="text-slate-400 font-semibold">🎮 Teams</p>

                    <p >{tournament.teams}</p>

                    <p className="text-slate-400 font-semibold">🏆 Stage</p>

                    <p >{tournament.currentStage}</p>

                    <p className="text-slate-400 font-semibold">⭐ MVP</p>

                    <p>{tournament.mvp}</p>


                    <p className="text-slate-400 font-semibold">🏆 Podium</p>

                    <ul className="flex flex-col  items-start">
                        {tournament.podium.map((pod, index) => {
                            const medals = ["🥇", "🥈", "🥉"];
                            return (
                                <li className="py-1" key={index}>{medals[index]}{pod}</li>
                            )

                        })}

                    </ul>


                </div>

                <div className="flex justify-end text-white">
                    <button className="px-5 py-3 rounded-lg bg-slate-700 hover:bg-slate-600 hover:scale-120 transition" onClick={onClose}>Close</button>
                    <button className="px-5 py-3 rounded-lg bg-cyan-700 hover:bg-cyan-600 transition hover:scale-120" >View Tournament</button>
                </div>
            </div>

        </div>
    );
}