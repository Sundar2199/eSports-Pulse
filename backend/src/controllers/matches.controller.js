
import {getMatches} from '../services/matches.service.js';

export async function fetchMatches(req,res){
    const matches = await getMatches();
    res.json(matches);
}

