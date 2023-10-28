const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {
        this.users = data
    }
}

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleRegister = async (req, res) => {
    const { user, pwd } = req.body;
    console.log(user, pwd);
    if (!user || !pwd) {
        return res
            .status(400)
            .json({ 'message': 'Username and password are required!' });
    }

    // check for duplicate usernames in the db
    const duplicate = usersDB.users.find(person => person.username === user);

    if (duplicate) {
        return res.sendStatus(409); // conflict
    }

    try {
        // encrypt the password
        const hashPwd = await bcrypt.hash(pwd, 10);

        // store the new user
        const newUser = {
            "username": user,
            "roles": { "User": 2001 },
            "password": hashPwd
        };
        usersDB.setUsers([...usersDB.users, newUser]);

        await fsPromises.writeFile(
            path.join(__dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        console.log(usersDB.users);

        res.status(201).json({ 'success': `New user ${user} created!` });

    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = { handleRegister };