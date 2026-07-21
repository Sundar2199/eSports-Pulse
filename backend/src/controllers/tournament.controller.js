import {getTournament , getTournamentById} from "../services/tournament.service.js"

export async function fetchTournament(req,res){

    const tournament = await getTournament();
    res.json(tournament);

}

export async function fetchTournamentById(req,res){
    const {id} = req.params;

    const tournament = await getTournamentById(id);

    if(!tournament)
    {
        res.json({
            msg:"error finding tourney"
        })
    }

    res.json(tournament);
}
