
import logo from "./eSportslogo.svg"
export function Navbar(){
    const navItems = [
  { name: "Home", path: "/" },
  { name: "Matches", path: "/matches" },
  { name: "Teams", path: "/teams" },
  { name: "Tournaments", path: "/tournaments" },
  { name: "News", path: "/news" },
  { name: "AI", path: "/ai" },
];
    return(
        <div className=" text-white px-8 py-4 flex flex-row justify-between content-center items-center" >
            <div className = "flex flex-row items-center gap-2">
            <img className = "w-10 h-10 "src = {logo} alt = "eSportsPulse Logo"></img>
            <h1 className = "text-xl font-black text-white "> eSportsPulse</h1>
            </div>

            <ul className="flex flex-row justify-around gap-10">
                {navItems.map((item)=>{
                    return(
                        <li key = {item.path}> {item.name} </li>
                    )
                })}
            </ul>

        </div>
    )
}