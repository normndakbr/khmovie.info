const { request } = require('node:http')
const { User } = require('../models')

class userController {
    static async register(req, res, next) {
        const payload = {
            username: request.body.username,
            password: request.body.password
        }

        try {

        } catch (error) {

        }
    }

    static async login(req, res, next) {

    }
}

module.exports = userController