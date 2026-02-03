const { getAll , getById, Insert, Update } = require("../models/users.model")

async function getAllUsers(){
    const data = await getAll()
    if(data){
        return {
            error : false,
            data,
            massage: "data fatechd successfully"
        }
    }else{
        return {
            error : true,
            massage: "soem error occured while fetching data"
        }
    }

}

async function getUserById(id){

    const data = await getById(id)
    if(data){
        return {
            error : false,
            data,
            massage: "data fatechd successfully"
        }
    }else{
        return {
            error : true,
            massage: "soem error occured while fetching data"
        }
    }
}

async function insertUser(formData){
    const data = await  Insert(formData)
    if(data){
        return {
            error : false,
            data,
            massage: "data inserted successfully"
        }
    }else{
        return {
            error : true,
            massage: "soem error occured while inserting data"
        }
    }
}

async function updateUser(id, formData){
    const data = await  Update(id,formData)
    if(data){
        return {
            error : false,
            data,
            massage: "data patched successfully"
        }
    }else{
        return {
            error : true,
            massage: "soem error occured while patching data"
        }
    }
}

async  function deleteUser(id){
    return "Delete user by id service called for"+id
}


module.exports = {getAllUsers,getUserById,insertUser,updateUser,deleteUser}