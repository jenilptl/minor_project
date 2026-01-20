function getAllUsers(){
    return "get all user service called"
}

function getUserById(id){
    return "get user by id service called for"+id
}

function insertUser(formData){
    return "insert user service called for"
}

function updateUser(id, formData){
    return "Update user by id service called for"+id
}

function deleteUser(id){
    return "Delete user by id service called for"+id
}


module.exports = {getAllUsers,getUserById,insertUser,updateUser,deleteUser}