import { TournamentCard } from "../../components/Cards/TournamentCard"
export function GameSection({ tournaments , onTournamentClick }) {

    return (
        <div >
            <div className="flex justify-between text-lg font-semibold mb-5">
                <h2 className="text-3xl font-bold tracking-wide">{"🎮"} {tournaments.game}</h2>
                <button className="text-cyan-400 hover:text-cyan-300 transition">View all</button>
            </div>
            <div className="flex gap-4">
            {tournaments.tournaments.map((tournament) => {
                return(
                <TournamentCard onTournamentClick = {onTournamentClick} key = { tournament.id} tournament={tournament} />
                )
            })}
            </div>
        </div>
    )


}