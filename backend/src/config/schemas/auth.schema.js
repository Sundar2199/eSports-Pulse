
import {z} from "zod"

export const registerSchema = z.object({
    username: z.string().trim().min(3,"username must be atleast 3 chars").max(20),

    name : z.string().trim().min(2,"name must be atleast 2 chars "),

    email: z.string().trim().email("please enter a valid email"),

    password : z.string().min(8,"password must be atlease 8 chars").max(100)
});

