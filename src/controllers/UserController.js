import User from '../models/User.js'


async function  getUsers(request, response) {
    const users = await User.find()

    return response.status(200).json(users)
}

async function createUsers(request, response) {
    const user = request.body

    const newUser = await User.create(user)

    return response.status(201).json(newUser)
}

async function deleteUsers(request, response) {
    const id = request.params.id

    await User.findByIdAndDelete({ _id : id})

    return response.status(200).json({response: "User deleted"})
}

// Somente usamos export default quando vamos exportar apenas uma coisa, em mais casos usamos dessa forma {}
export { getUsers, createUsers, deleteUsers }

