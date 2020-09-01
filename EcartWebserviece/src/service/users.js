const db = require('../model/users');
const validator = require('../utilities/validator');
const { response } = require('express');

let UserService = {}

UserService.login=(email,password)=>{
    return db.login(email,password).then((response)=>{
        if(response!==null){
            return response;
        }else{
            let err= new Error("Failed to login");
            err.status=500;
            throw err;
        }
    })
}
UserService.getAllUsers=()=>{
    return db.getAllUsers().then((response)=>{
        if(response!==null){
            return response;
        }else{
            let err= new Error("No users found");
            err.status=500;
            throw err;
        }
    })
}
// UserService.register=(User)=>{

// }
module.exports = UserService;