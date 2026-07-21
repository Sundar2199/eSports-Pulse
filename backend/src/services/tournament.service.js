import TournamentProvider from "../providers/dummyTournament.js"

export function getTournament(){
    return TournamentProvider;
}

export function getTournamentById(id) {
    for (const game of TournamentProvider) {
        const tournament = game.tournaments.find((index) => {
            return index.id === Number(id);
        })
        if (tournament) {
            return tournament;
        }
    }


    return null
}