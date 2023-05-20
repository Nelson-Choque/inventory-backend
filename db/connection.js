

import mysql from "mysql2";

const connection = mysql.createConnection({

    host: "localhost",

    database: "inventory",

    user: "root",
    
    password: "",
    

})

connection.connect((err)=>{

    if(err){
        throw "the connnection was not sucessful"
    }

    console.log("the connection is gud :D")

})

export default connection;