import dotenv from 'dotenv';
dotenv.config();


import express from 'express'
import connectDataBase from './database/db.js'
import routes from './routes.js'


const app = express()

app.use(express.json())
app.use(routes)

connectDataBase()
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor Ligado & MongoDB Conectado")
        })
    })
    .catch((error) => console.log(error))

