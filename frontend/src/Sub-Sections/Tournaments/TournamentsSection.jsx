import { TournamentModal } from "../../components/Modal/TournamentModal";
import { GameSection } from "./GameSection"
import { useState } from "react";
export function TournamentsSection({ tournaments }) {
    const [selectedTournament, setSelectedTournament] = useState(null);

    console.log(selectedTournament);


    return (
        <section className="py-3 px-3 flex flex-col text-white gap-5 bg-slate-950  ">

            <div className="mb-10">

                <h1 className="text-4xl font-black">

                    🏆 Featured Tournaments

                </h1>

                <p className="text-slate-400 mt-2">

                    Follow every major esports tournament.

                </p>

            </div>

            {tournaments.map((games) => {
                return (
                    <GameSection onTournamentClick={setSelectedTournament} key={games.game} tournaments={games} />
                )
            })}

            {selectedTournament && (
                <TournamentModal tournament={selectedTournament} onClose={() => {
                    setSelectedTournament(null);
                }} />
            )}


        </section>
    )
}


