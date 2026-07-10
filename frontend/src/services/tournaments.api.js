
const URL = "http://localhost:3000";

export async function getTournament(){
    const response = await fetch(`${URL}/api/tournament`);

    if(!response.ok)
    {
        throw new Error("couldnt fetch data");
    }

    return response.json();
}

