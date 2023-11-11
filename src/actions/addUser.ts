'use server'
import { dbConnect } from "@/db/dbConnect"
import User from "@/db/models/User"
import {hash} from "bcryptjs"
export async function addUser(addUser: FormData) {
        console.log(addUser)
        const name = addUser.get("name")
        const tel = addUser.get("tel")
        const email = addUser.get("email")
        const password = addUser.get("password")
        try {
            await dbConnect()
            const userExists = await User.findOne({ email })
            if(userExists){
                return console.log("User Already exists")
            }
            else {
                const hashed_password = await hash(password, 10)
                const user = await User.create({
                "name": name,
                "email": email,
                "tel" : tel,
                "password": hashed_password,
            })
            console.log('User created successfully:', user);}
        }catch (error) {
            console.log(error)
        }
}