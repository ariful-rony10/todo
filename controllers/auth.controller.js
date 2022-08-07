const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jsw = require('jsonwebtoken')
const createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
        })
        await newUser.save()
        res.status(200).json({ message: "Signup is sucessfull!" })
    } catch (error) {
        res.status(500).json({ message: "Signup failed! - please try again later." })
    }

}
// Login user
const loginUser = async (req, res) => {
    try {
        const user = new User.find({ username: req.body.username })
        if (user && user > 0) {
            const isValid = await bcrypt.compare(req.body.password, user[0].password)
            if (isValid) {
                // Generate token
                const token = jwt.sign({
                    username: user[0].username,
                    userId: user[0]._id
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                })
                res.status(201).json({
                    "access_token": token,
                    "message": "Login sucessfully"
                })
            } else {
                res.status(401).json({ "error": "Authentication failed!" })
            }
        } else {
            res.status(401).json({ "error": "Authentication failed!" })
        }
    } catch (error) {
        res.status(401).json({ "error": "Authentication failed!" })
    }
}


module.exports = {
    createUser,
    loginUser
}