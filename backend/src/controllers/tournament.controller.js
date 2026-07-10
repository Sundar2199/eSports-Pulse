import {getTournament} from "../services/tournament.service.js"

export async function fetchTournament(req,res){

    const tournament = await getTournament();
    res.json(tournament);

}
