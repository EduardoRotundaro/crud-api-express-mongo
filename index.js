const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')

const dbSettings = require('./src/database/databaseSettings')
const errorHandler = require('./src/middlewares/errorHandler')
const handler404 = require('./src/middlewares/handler404')

const _PORT = process.env.PORT || 4040;

app.use(cors())

app.use(helmet())
app.disable('x-powered-by')

app.use(compression())

app.use( bodyParser.json() )
app.use(express.static('static/public'))

let api = express.Router()
require('./src/routes/router')(api)

app.use('/server', api)

app.use(errorHandler)
app.use(handler404)

app.listen(_PORT, (err)=>{
    if(err){
        console.log(`[ERROR] Could not start the application...`) 
        console.log(`[ERROR] ${err.message}`)
    }
    else console.log(`Server is running on port ${_PORT}...`)
}); 

mongoose.connect(dbSettings.address, dbSettings.options, (err)=>{
    if(err){
        console.log(`[ERROR] Could not connect to database: ${dbSettings.address}`) 
        console.log(`[ERROR] ${err.message}`)
    }
    else console.log(`Server connected to database: ${dbSettings.address}`)
});