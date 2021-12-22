const app = require("./app")
const connectDb = require('./config/db')
const dotenv = require("dotenv");
dotenv.config({path:'backend/config/config.env'})

//connect to db
connectDb();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})