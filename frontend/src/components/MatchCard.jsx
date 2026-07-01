
export function MatchCard({match}){
    return (
        <div>

            <h2> Match no : {match.id}</h2>

      <h3>{match.teamA} vs {match.teamB}</h3>
      <p>
        score : {match.score} <br></br>
      </p>

      <p>
        status : {match.status}
      </p>
        </div>
    )
}

