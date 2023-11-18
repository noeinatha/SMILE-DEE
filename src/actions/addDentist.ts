'use server'
import { dbConnect } from "@/db/dbConnect"
import  Dentist from "@/db/models/Dentist"
import { revalidatePath } from "next/cache";
export async function addDentist(addDentist: FormData) {
        const name = addDentist.get("name")
        const hospital = addDentist.get("hospital")
        const address = addDentist.get("address")
        const expertist = addDentist.get("expertist")
        const tel = addDentist.get("tel")
        const picture = "https://drive.google.com/uc?export=view&id=1Qk7y478S0r6Vv9SAvxSghi49Xumu6omd"
        try {
            await dbConnect()
            const dentist = Dentist.create({
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