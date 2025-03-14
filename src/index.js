import dotenv from 'dotenv'
import {app} from './app.js'
import connectDB from './db/index.js'

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
        app.listen(process.env.PORT || 8085, () => {
            console.log(`server is running ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("db connection fail",error);

    })
