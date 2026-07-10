export function TournamentCard({ tournament , onTournamentClick }) {

    return (

        <div className="flex flex-col w-72 shrink-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-5 shadow-lg transition-all duration-300 hover:scale-[1.02] hover-shadow-cyan-500/20 text-white cursor-pointer " onClick ={()=>onTournamentClick(tournament)} >      

            <h2 >

                {tournament.name}

            </h2>

            <p>

                Status :
                {" "}
                {tournament.status}

            </p>

            <p>

                Prize Pool :
                {" "}
                ${tournament.prizePool.toLocaleString()}

            </p>

            <p>

                Venue :
                {" "}
                {tournament.venue}

            </p>

            <p>

                Teams :
                {" "}
                {tournament.teams}

            </p>

            <p>

                Stage :
                {" "}
                {tournament.currentStage}

            </p>

            <p>

                MVP :
                {" "}
                {tournament.mvp}
                {" "}

            </p>

            

            

        </div>

    );

}