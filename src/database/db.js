import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config();


// Enviroment Variables
const DB_USER = process.env.DB_USER;
const DB_SENHA = process.env.DB_SENHA;


async function connectDataBase() {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_SENHA}@cluster0.chkninc.mongodb.net/`)
}

export default connectDataBase