
export function Hero(){
    return(
        <section className = "grid grid-cols-2 gap-4 min-h-[80vh] font-sans text-white">

            <div className = "flex flex-col justify-center items-center gap-4 text-center bg-transparent">
            <h1 className = "text-4xl font-bold ">Track every Match</h1>
            <h2 className = "text-2xl font-semibold">Follow Tournaments</h2>
            <p className = "text-lg font-light">Stay updated with the latest esports news and tournaments</p>
            <h2 className = "text-2xl font-semibold" >Ask Ai about eSports World</h2>
            <button className = "bg-cyan-500 hover:bg-cyan-700 text-3xl text-white font-bold py-4 px-4 rounded">Explore Matches</button>
        </div>

            <div>
                <h1>Right side of the grid having avatar</h1>
            </div>



        </section>
        
    )
}