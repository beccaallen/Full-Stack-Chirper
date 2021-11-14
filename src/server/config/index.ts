import * as dotenv from "dotenv"

const envfound = dotenv.config()

if(!envfound){
    throw new Error("Cannot find the .env file")
}

export default {

    mysql: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA
    },
    port: parseInt(process.env.PORT, 10)
 
}