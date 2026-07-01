import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/" , (req,res)=>{
    res.json({
        msg:"server created successfully"
})
})

app.listen(3000);

