const User = require('../model/User');
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
    const duplicate = await User.findOne({ username: user }).exec();

    if (duplicate) {
        return res.sendStatus(409); // conflict
    }

    try {
        // encrypt the password
        const hashPwd = await bcrypt.hash(pwd, 10);

        // create and store the new user
        const result = await User.create({
            "username": user,
            "password": hashPwd
        })

        console.log(result);

        res.status(201).json({ 'success': `New user ${user} created!` });

    } catch (error) {
        res.status(500).json({ 'message': error.message });
    }
}

module.exports = { handleRegister };