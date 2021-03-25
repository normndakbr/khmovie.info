const { User } = require('../models')
const { comparePassword } = require("../helpers/bcrypt")
const { loginToken } = require("../helpers/jsonwebtoken")

class userController {
    static async register(request, response, next) {
        const payload = {
            username: request.body.username,
            password: request.body.password
        }
        try {
            const data = await User.create(payload)
            response.status(201).json({
                id: data.id,
                username: data.username
            })
        } catch (error) {
            console.log("Register Error!", + error)
            next(error)
        }
    }

    static async login(request, response, next) {
        const payload = {
            username: request.body.username,
            password: request.body.password
        }
        try {
            const data = await User.findOne({
                where: {
                    username: payload.username
                }
            })

            if (!data) {
                throw ({ name: 'UserNotFound' })
            } else if (!comparePassword(payload.password, data.password)) {
                throw ({ name: 'InvalidUsernamePassword' })
            } else {
                const access_token = loginToken({
                    id: data.id,
                    username: data.username
                })
                response.status(200).json({
                    message: 'Login Success',
                    username: data.username,
                    access_token: access_token
                })
            }
        } catch (error) {
            console.log("Login Error!", + error)
            next(error)
        }
    }
}

module.exports = userController