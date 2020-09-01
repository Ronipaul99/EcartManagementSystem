const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/Ecart_userDB";

const customerSchema = Schema({
    customerId: String,
    customerProfile:{
        customerName: String,
        walletAmount: Number,
        mobileNo:Number,
    },
    customerCred:{
        email:String,
        password:String,
    },
    customerType: { type: String, enum: ['Platinum', 'Gold', 'Silver'] }

}, { collection: "Customer" });


let collection = {};

collection.getCustomerCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Customer', customerSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = collection;