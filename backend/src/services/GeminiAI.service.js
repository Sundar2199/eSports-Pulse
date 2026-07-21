import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";



const client = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY
});

console.log("Service API Key:", process.env.GEMINI_API_KEY);
export async function askGenAI(message){

   const interaction = await client.interactions.create({
    model: "gemini-3.5-flash",
    input: message,
  });

  return interaction.output_text;
  console.log(interaction.output_text);
}