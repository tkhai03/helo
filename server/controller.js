const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const [user] = await db.check_username([username])

        if (user) {
            return res.status(409).send('Username already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.register_user([username, hash])

       newUser = req.session.user

        res.status(200).send(newUser)

    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        const [existingUser] = await db.check_username([username])

        if (!existingUser) {
            return res.status(404).send('Username not found')
        }

        const isValid = bcrypt.compareSync(password, existingUser.hash)

        if(!isValid) {
            return res.status(403).send('Incorrect username or password')
        }
        delete existingUser.hash

        //User on Session
        existingUser = req.session.user

    },
    logout: (req, res) => {
        req.sesion.destroy()
        res.sendStatus(200)
    }
}