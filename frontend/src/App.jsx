import { useState , useEffect } from "react";
import {getMatches} from "./services/matches.api.js";
import { MatchCard } from "./components/MatchCard.jsx";
import {Navbar} from "./components/Navbar/Navbar.jsx"
import {Hero} from "./components/Hero/Hero.jsx"
function App(){
  const [matches,setMatches] = useState([]);
  const [err,setErr] =  useState(null);

  useEffect(()=>{

    async function fetchMatches(){
      try{
    const response = await getMatches();

    setMatches(response);
    

    }
    catch(err){

    /*setErr("Error connecting to server");*/
  }}

  fetchMatches();

  },[])
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      {matches.map((match)=>{
        return(
          <MatchCard key = {match.id} match = {match}/>
        )
      })}
      {err && <p>{err}</p>}
    </div>
  )
}

export default App;