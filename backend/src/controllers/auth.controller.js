
export async function register(req,res){
    console.log(req.body);

    res.json({
        success:"true",
        message:"validation passed"
    });
    
}