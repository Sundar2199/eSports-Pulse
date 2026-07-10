import {MatchCard} from "../../components/Cards/MatchCard.jsx";

export function LiveMatchesSection({matches}){
    return(
        <section className = "py-20 px-8 bg-slate-950 text-white" >
            <div className = "flex gap-2 justify-between items-center mb-8">
                <h2 className = "text-3xl font-bold">Live Matches</h2>
            <p>
                Stay updated with every ongoing match
            </p>
            <button>View All</button>
            </div>
            
            <div className = " flex gap-6 overflow-x-auto pb-4 ">
                {matches.map((match)=>{
                    return(
                        <MatchCard key = {match.id} match = {match}/>
                    )
                })}
            </div>
        </section>
    )
}