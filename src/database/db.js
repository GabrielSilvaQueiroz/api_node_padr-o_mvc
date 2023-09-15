import mongoose from "mongoose"


async function connectDataBase() {
    await mongoose.connect("mongodb+srv://gabriel:V63edH0F2GEGxNP2@cluster0.chkninc.mongodb.net/")  
}

export default connectDataBase