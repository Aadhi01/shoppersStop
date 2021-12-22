const mongoose = require('mongoose');

const connectDb = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }).then(con =>{
        console.log(`Mongo connected :${con.connection.host}`)
    })
}

module.exports = connectDb;