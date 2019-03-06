const URL = 'mongodb://localhost:27017/'
const DB_NAME = 'toDoApp'

const SETTINGS = {
    useNewUrlParser: true
}

module.exports = { 
    address: URL + DB_NAME,
    options: SETTINGS
}