const db = require("../db/mysql")

async function getAll(){
    try{
        const [data,field] = await db.query("SELECT * from users");
        return data;
    }catch(err){
        return false
    }
}

async function getById(id){
    try{
        const [data,field]= await db.query("SELECT * from users WHERE UserID = ?", [id]);
        return data[0];
    }catch(err){
        return false
    }
}

async function Insert(formData){
    try{
        const [data,field]= await db.query(
            "INSERT INTO users (UserID, UserName, Password) VALUES (NULL, ?, ?)",
            [formData.UserName, formData.Password]
        );
        return data;
    }catch(err){
        return false
    }
}

async function Update(id, formData){
    try{
        const [data] = await db.query(
            "UPDATE users SET UserName = ?, Password = ? WHERE UserID = ?",
            [formData.UserName, formData.Password, id]
        );
        return data;
    }catch(err){
        return false;
    }
}


async function deletebyid(id){
    try{
        const [data,field] = await db.query("DELETE FROM users WHERE UserID = ?", [id]);
        return data;
    }catch(err){
        return false
    }
}

module.exports = {getAll,getById,Insert,Update,deletebyid}