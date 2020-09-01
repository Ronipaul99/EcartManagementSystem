const dbModel = require('../utilities/connection');

const userDB = {}

userDB.generateId=()=>{
    return dbModel.getCustomerCollection().then((model)=>{
        return model.distinct('customerId').then((Ids)=>{
            IDnum=[]
            Ids.array.forEach(ID => {
                IDnum.push(ID.slice(2))
            });
            maxId=Math.max(...IDnum);
            return "CU"+maxId;
        })
    })
}

userDB.login=(email,password)=>{
    return dbModel.getCustomerCollection().then((Model)=>{
        return Model.findOne({$and:[{"customerCred.email":email,"customerCred.password":password}]},
            {_id:0,customerCred:1,customerId:1,customerProfile:1}).then((User)=>{
            if(User){
                return User;
            }else{
                return null;
            }
        })
    })
}

userDB.registerUser=(User)=>{
    return dbModel.getCustomerCollection().then((model)=>{
        return userDB.generateId().then((ID)=>{
            User.customerId=ID;
            return model.create(User).then((response)=>{
                if(response){
                    return response;
                }else{
                    return null;
                }
            })
        })
    })
}

userDB.getAllUsers=()=>{
    return dbModel.getCustomerCollection().then((model)=>{
        return model.find({}).then((data)=>{
            if(data){
                return data;
            }else{
                return null;
            }
        })
    })
}
module.exports = userDB;


