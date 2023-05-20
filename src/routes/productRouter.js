
import express from 'express';
import connection from "./../../db/connection.js";

const productRouter = express.Router();


productRouter.get("/",(req,res)=>{

    connection.query("select * from product",(err,result)=>{

        if(err){
            throw "the query had problems"
        }

        res.send(result);

    })
    
})


productRouter.get("/:id",(req,res)=>{

    const id = req.params.id;

    const query = "select * from product where id_product = ?";

    connection.query( query,[id],(err,result)=>{

        if(err){
            throw "the query had problems"
        }

        res.send(result);

    })
    
})


productRouter.post("/",(req,res)=>{
    
    console.log(req.headers['content-type'])

    const data = req.body;
 
    const insertQuery = "insert into product (name,description,stock,price) values (?,?,?,?)";
    
    const dataQuery = Object.values(data);

    connection.query(insertQuery, dataQuery ,(err,result)=>{

        if(err){
            throw "the query had problems"
        }

        res.send(result);

    })



})

productRouter.put("/:id",(req,res)=>{

    const id = req.params.id;


    const query = "update product set name = ?, description = ?, stock = ?, price = ? where id_product = ?";

    const data = {...req.body, id};
    
    const dataQuery= Object.values(data);

    connection.query(query, dataQuery, (err,result)=>{

        if(err){
            throw "the query update had problems on request"
        }

        res.send(result);
    })


})


productRouter.delete("/:id",(req,res)=>{

    const id = req.params.id

    const query = "delete from product where id_product = ?"

    connection.query(query,[id],(err,result)=>{

        if(err){
            throw "the product can't be deleted: " + err;
        }

        res.send(result);


    })



})

export default productRouter;