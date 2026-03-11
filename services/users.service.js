const { getAll, getById, Insert, Update, deletebyid } = require("../models/users.model")

async function getAllUsers(){
    const data = await getAll()
    if(data){
        return {
            error : false,
            data,
            message: "data fetched successfully"
        }
    }else{
        return {
            error : true,
            message: "some error occurred while fetching data"
        }
    }

}

async function getUserById(id){

    const data = await getById(id)
    if(data){
        return {
            error : false,
            data,
            message: "data fetched successfully"
        }
    }else{
        return {
            error : true,
            message: "some error occurred while fetching data"
        }
    }
}

async function insertUser(formData){
    const data = await Insert(formData)
    if(data){
        return {
            error : false,
            data,
            message: "data inserted successfully"
        }
    }else{
        return {
            error : true,
            message: "some error occurred while inserting data"
        }
    }
}

async function updateUser(id, formData){
    const data = await Update(id, formData)
    if(data){
        return {
            error : false,
            data,
            message: "data updated successfully"
        }
    }else{
        return {
            error : true,
            message: "some error occurred while updating data"
        }
    }
}

async function deleteUser(id){
    const data = await deletebyid(id)
    if(data){
        return {
            error : false,
            data,
            message: "user deleted successfully"
        }
    }else{
        return {
            error : true,
            message: "some error occurred while deleting user"
        }
    }
}


module.exports = {getAllUsers,getUserById,insertUser,updateUser,deleteUser}