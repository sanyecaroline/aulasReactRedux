const express = require('express')

module.exports = function(server){
    //API ROUTER
    const router = express.Router()
    server.use('/api', router)
    
    //TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}