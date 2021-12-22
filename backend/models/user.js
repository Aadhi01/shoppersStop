const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String, required:[true, "Please enter the user name"]},
    email:{type:String, required:[true, "Please enter the user email"]},
    password:{type:String, required:[true, "Please enter the user password"]},
    savedAddresses:[
        {
            addressLine1:{type:String, required:[true, "Please enter the addressLine1"]},
            addressLine2:{type:String },
            state:{type:String, required:[true, "Please enter the state"]},
        }
    ]
    orders:{},
    image:{},
    savedCard:{},
    reviews:{}
})