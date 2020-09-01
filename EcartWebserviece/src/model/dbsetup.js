const collection = require('../utilities/connection');

const customerDb = [
    {
        customerId: "CU1001",
        customerProfile:{
            customerName: "Roni paul",
            walletAmount: 500,
            mobileNo:9903245034,
        },
        customerCred:{
            email:"ronipaul9972@gmail.com",
            password:"Roni#8981",
        },
        customerType: 'Platinum'
    },
    {
        customerId: "CU100",
        customerProfile:{
            customerName: "Sanjay Roy",
            walletAmount: 1000,
            mobileNo:8625143258,
        },
        customerCred:{
            email:"sanjayroy@gmail.com",
            password:"Sanjay123",
        },
        customerType: 'Gold'
    },
    {
        customerId: "CU1003",
        customerProfile:{
            customerName: "Bidisha paul",
            walletAmount: 2000,
            mobileNo:9903245034,
        },
        customerCred:{
            email:"bidisha@gmail.com",
            password:"Bidisha123",
        },
        customerType: 'Platinum'
    },
    {
        customerId: "CU1004",
        customerProfile:{
            customerName: "Kanu das",
            walletAmount: 100,
            mobileNo:9825469871,
        },
        customerCred:{
            email:"kanu@gmail.com",
            password:"Kanu123",
        },
        customerType: 'Silver'
    },
]



exports.setupDb = () => {
    return collection.getCustomerCollection().then((customer) => {
        return customer.deleteMany().then(() => {
            return customer.insertMany(customerDb).then((data) => {
                if (data) return "Insertion Successfull"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}