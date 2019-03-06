const ToDoItemModel = require('../models/toDoItemModel').ToDoItemModel

let newToDoItem = async (data)=>{
    let resp = {
        data: null,
        status: null,
        error: null
    }

    try {
        if(!data.description){
            resp.status = 400
            resp.error = "Invalid params"
            return resp
        }

        let tdItem = { description: data.description }

        let toDoItem = await ToDoItemModel.create(tdItem)

        resp.status = 200
        resp.data = toDoItem
        
        return resp
    } catch (error) {
        resp.status = 500
        resp.error = error.message
        return resp
    }
}

module.exports = {
    newToDoItem: async (data)=>{
        return await newToDoItem(data)
    }
}