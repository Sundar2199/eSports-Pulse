
const URL  = "http://localhost:3000";

export async function getMatches(){
    const response = await fetch(`${URL}/api/matches`);

    if(!response.ok){
        throw new Error("Error fetching matches data");
    }
    return response.json();
}

