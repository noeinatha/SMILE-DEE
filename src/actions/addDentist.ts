'use server'
import { dbConnect } from "@/db/dbConnect"
import  Dentist from "@/db/models/Dentist"
import { revalidatePath } from "next/cache";
export async function addDentist(addDentist: FormData) {
        console.log(addDentist)
        const name = addDentist.get("name")
        const hospital = addDentist.get("hospital")
        const address = addDentist.get("address")
        const expertist = addDentist.get("expertist")
        const tel = addDentist.get("tel")
        const picture = addDentist.get("picture")
        // console.log("after0",addDentist)
        try {
            await dbConnect()
            const dentist = await Dentist.create({
                name,
                hospital,
                address,
                expertist,
                tel,
                picture
            })
            console.log('Dentist created successfully:',dentist)
        }catch (error) {
            console.log(error)
        }
        revalidatePath('/hospital')
}