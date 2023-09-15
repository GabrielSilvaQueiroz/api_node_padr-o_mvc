import { Router } from "express";

import {getUsers, createUsers, deleteUsers} from './controllers/UserController.js'

const routes = Router()

routes.get('/users', getUsers)
routes.post('/users', createUsers)
routes.delete('/users/:id', deleteUsers)

export default routes