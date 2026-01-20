const express = require('express');
const { getAllUsers, getUserById, deleteUser, insertUser } = require('../services/users.service');

const routeUser = express.Router();

//get all
routeUser.get('/',(req,res)=>{
    const data = getAllUsers()
    res.send(data);
})

//get by id
routeUser.get('/:id',(req,res)=>{
    const data = getUserById(req.params.id)
    res.send(data);
})

//insert new user
routeUser.post('/',(req,res)=>{
    const data = insertUser(req.body)
    res.send(data);
})

//edit user
routeUser.patch('/:id',(req,res)=>{
    const data = updateUser(req.params.id, req.body)
    res.send("update user");
})

//delete user
routeUser.delete('/:id',(req,res)=>{
    const data = deleteUser(req.params.id);
    res.send("user deleted");
})
module.exports = routeUser;