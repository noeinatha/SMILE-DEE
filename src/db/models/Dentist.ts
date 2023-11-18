import mongoose from "mongoose";
const DentistSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Please add a name"],
        unique: true,
        trim: true,
        maxlength: [50, "Name cannot be more than 50 characters"],
      },
      hospital: {
        type: String,
        required: [true, "Please add hospital"],
      },
      address: {
        type: String,
        required: [true, "Please add an address"],
      },
      expertist: {
        type: String,
        required: [true, "Please add expertist"],
      },
      tel: {
        type: String,
      },
      picture: {
        type: String,
        required: [true, "Please add URL to dentist picture"],
      },
});
const Dentist = mongoose.models.Dentist || mongoose.model("Dentist", DentistSchema);
export default Dentist