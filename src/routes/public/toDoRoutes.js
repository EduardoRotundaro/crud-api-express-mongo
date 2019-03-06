const BASE = '/to-do/'

const responseObject = require('../../utils/responseObject')
const todoModule = require('../../modules/toDoModule')

module.exports = (app) => {

    app.post(`${BASE}new`, async function (req, res, next) {

        console.log(`-> [POST] ${req.originalUrl}`)

        let response = await todoModule.newToDoItem(req.body)

        console.log(`<- [POST] ${req.originalUrl}`)

        return responseObject(res, response.status, response.data, response.error)
    })

}