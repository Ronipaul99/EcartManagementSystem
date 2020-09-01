const express = require('express');
const routing = express.Router();
const create = require('../model/dbsetup');
const UserServiece = require('../service/users');
const { response } = require('express');


// DO NOT REMOVE THIS IMPORT STATEMENT


// setup db mongoose db

routing.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

routing.post('/login',(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;
    return UserServiece.login(email,password).then((response)=>{
        res.json(response);
    }).catch((error)=>{
        next(error);
    })
})

routing.get('/getAllUsers',(req,res,next)=>{
    return UserServiece.getAllUsers().then((response)=>{
        res.json(response)
    }).catch((error)=>{
        next(error);
    })
})

module.exports = routing;