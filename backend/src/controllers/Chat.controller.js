import { askGenAI } from "../services/GeminiAI.service.js";

export async function chatWithAI(req,res) {

    console.log("Body:", req.body);

    try{
        const {message} = req.body;
        const response  = await askGenAI(message);

        res.json(
            {
                reply:response
            }
        )

    }catch(err){
        console.error(err);

        res.status(500).json({
            error:"something went wrong"
        })    
    }
    
    


}