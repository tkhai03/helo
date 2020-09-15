const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} =req.body

        const [username] = await db.check_username([username])
        if (username) {
            return res.status(409).send('Username already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUsername] = await db.register_username([username, hash])

        req.session.username = newUsername

        res.status(200).send(req.session.user)

    },
}