const express = require('express')

let publicRoutes = express.Router()
require('./public/toDoRoutes')(publicRoutes)

module.exports = (api)=>{

    api.use('/', publicRoutes)

}