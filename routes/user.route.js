const express = require('express');
const { getAllUsers, getUserById, deleteUser, insertUser, updateUser } =
  require('../services/users.service');


const routeUser = express.Router();

//get all
routeUser.get('/',async(req,res)=>{
    const data = await getAllUsers()
    res.status(data.error ? 500 : 200).json(data);
})

//get by id
routeUser.get('/:id',async(req,res)=>{
    const data = await getUserById(req.params.id)
    res.status(data.error ? 404 : 200).json(data);
})

//insert new user
routeUser.post('/',async(req,res)=>{
    const data = await insertUser(req.body)
    res.status(data.error ? 500 : 201).json(data);
})

//edit user
routeUser.patch('/:id',async(req,res)=>{
    const data = await updateUser(req.params.id, req.body)
    res.status(data.error ? 500 : 200).json(data);
})

//delete user
routeUser.delete('/:id',async(req,res)=>{
    const data = await deleteUser(req.params.id);
    res.status(data.error ? 500 : 200).json(data);
})
module.exports = routeUser;