
export function MatchCard({match}){
    return (
        <div className = "shadow-lg hover:shadow-cyan-500 hover:translate-x-1 hover:translate-y-1 transition-all duration-300 bg-gradient-to-br from-slate-800 to-cyan-950 text-white w-80 shrink-0 flex flex-col gap-2 p-2 rounded-xl ">

            <h2 className = "text-xl font-bold"> Match no : {match.id}</h2>

      <h3 className = "text-lg font-semibold">{match.teamA} vs {match.teamB}</h3>
      <p>
        score : {match.score} <br></br>
      </p>

      <p>
        status : {match.status}
      </p>
        </div>
    )
}

