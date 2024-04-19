import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://virgarg772003:jptnqsBaGbAVplQp@cluster0.nzkw77d.mongodb.net/tomato').then(() => console.log("DB Connected"))
}