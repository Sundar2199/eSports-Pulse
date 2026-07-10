import { useState , useEffect } from "react";
import {getMatches} from "./services/matches.api.js";
import {Navbar} from "./components/Navbar/Navbar.jsx"
import {Hero} from "./components/Hero/Hero.jsx"
import {LiveMatchesSection} from "./Sub-Sections/LIveMatches/LiveMatchesSection.jsx"
import { getTournament } from "../src/services/tournaments.api.js";
import { TournamentsSection } from "./Sub-Sections/Tournaments/TournamentsSection.jsx";
function App(){
  const [matches,setMatches] = useState([]);
  const [tournaments,setTournaments] = useState([]);

  useEffect(()=>{

    async function fetchMatches(){
      try{
    const matchfetch = await getMatches();
    const tournamentfetch = await getTournament();
    setMatches(matchfetch);
    setTournaments(tournamentfetch);
    }
    catch(err){
      console.log(err);
    /*setErr("Error connecting to server");*/
  }}

  fetchMatches();

  },[])
  

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
        
          <Navbar/>
          <Hero/>
        
      </section>
      <LiveMatchesSection matches = {matches}/>
      <TournamentsSection tournaments={tournaments}/>
    </div>

  )
}

export default App;